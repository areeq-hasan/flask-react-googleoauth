from flask import request, jsonify
from flask_restful import Api, Resource, fields, marshal_with
from flask_login import (
    LoginManager,
    login_user,
    login_required,
    logout_user,
    current_user,
)
from http import HTTPStatus

from app.http.api.utils.security import csrf_protection
from app.http.api.utils.oauth import validate_id_token

from app.models.user.manager import UserManager
from app.models.user.schema import UserSchema
from app.models.user import User

from app import app

login = LoginManager()
login.init_app(app)
login.session_protection = "strong"

from app.http.api import api

user_manager = UserManager()


@login.user_loader
def user_loader(user_id):
    return user_manager.get(user_id)


class Profile(Resource):
    google_user = {
        "user_id": fields.String(),
        "name": fields.String(),
        "email": fields.String(),
        "profile_pic": fields.String(),
    }

    @login_required
    @marshal_with(google_user)
    def get(self):
        return UserSchema().dump(current_user)

    @marshal_with(google_user)
    @csrf_protection
    def post(self):
        # Validate the identity
        id_token = request.form.get("id_token")
        if id_token is None:
            return "No ID token provided", HTTPStatus.FORBIDDEN

        try:
            identity = validate_id_token(id_token, app.config["GOOGLE_CLIENT_ID"])
        except ValueError:
            return "Invalid ID token", HTTPStatus.FORBIDDEN

        # Get the user info out of the validated identity
        if (
            "sub" not in identity
            or "name" not in identity
            or "email" not in identity
            or "picture" not in identity
        ):
            return "Unexpected authorization response", HTTPStatus.FORBIDDEN

        user = user_manager.get(identity["sub"])
        if not user:
            user = user_manager.create(
                User(
                    identity["sub"],
                    identity["name"],
                    identity["email"],
                    identity["picture"],
                )
            )

        # Authorize the user:
        login_user(user, remember=True)

        return self.get()

    @login_required
    @csrf_protection
    def delete(self):
        logout_user()
        return "", HTTPStatus.NO_CONTENT


api.add_resource(Profile, "/api/profile")
