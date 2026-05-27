from user_repository import find_user_by_email
from utils.hash_password import verify_password


def authenticate_user(email, password):
    user = find_user_by_email(email)

    # não expõe se o usuário existe ou não
    if not user:
        return {
            "status": "error",
            "message": "Credenciais inválidas",
            "code": 401
        }

    if not verify_password(password, user["password"]):
        return {
            "status": "error",
            "message": "Credenciais inválidas",
            "code": 401
        }

    return {
        "status": "success",
        "user": user["name"]
    }