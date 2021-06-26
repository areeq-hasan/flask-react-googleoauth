from flask_login import UserMixin


class User(UserMixin):
    def __init__(self, user_id: str, name: str, email: str, profile_pic: str):
        self.user_id = user_id
        self.name = name
        self.email = email
        self.profile_pic = profile_pic
