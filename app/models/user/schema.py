from marshmallow import Schema, fields, post_load
from app.models.user import User


class UserSchema(Schema):
    user_id = fields.String(required=True)
    name = fields.String()
    email = fields.Email()
    profile_pic = fields.Url()

    @post_load
    def create_user(self, data, **kwargs):
        return User(**data)
