import os
import ast
import uuid

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

from app.config import FIREBASE_CREDENTIALS

from app.models.user.schema import UserSchema
from app.models.user import User

from typing import List


class UserManager(object):
    def __init__(self):
        firebase_admin.initialize_app(credentials.Certificate(FIREBASE_CREDENTIALS))
        self.db = firestore.client()
        self.users = self.db.collection("users")

    def query(self, queries=[], get_all=True) -> List[User]:
        users = self.users
        for query in queries:
            users = users.where(*query)
        return (
            [UserSchema().load(user_doc.get().to_dict()) for user_doc in users.stream()]
            if get_all
            else [
                UserSchema().load(user_doc.get().to_dict())
                for user_doc in users.limit(1).stream()
            ]
        )

    def get(self, user_id: str) -> User:
        return UserSchema().load(self.users.document(user_id).get().to_dict())

    def create(self, user: User) -> User:
        self.users.document(user.user_id).create(UserSchema().dump(user))
        return self.get(user.user_id)

    def update(self, user_id: str, user: User) -> User:
        self.users.document(user_id).update(UserSchema().dump(user))
        return self.get(user_id)

    def delete(self, user_id: str):
        self.users.document(user_id).delete()
