from flask import Blueprint, request, jsonify, send_from_directory
import os

from auth_service import authenticate_user

bp = Blueprint("auth", __name__)

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
FRONT_DIR = os.path.abspath(os.path.join(BASE_DIR, "../Front"))


# ---------------- FRONT ----------------

@bp.route("/")
def login_page():
    return send_from_directory(
        os.path.join(FRONT_DIR, "templates"),
        "login.html"
    )


@bp.route("/home")
def home_page():
    return send_from_directory(
        os.path.join(FRONT_DIR, "templates"),
        "home.html"
    )


# ---------------- LOGIN API ----------------

@bp.route("/login", methods=["POST"])
def login():
    data = request.get_json() or {}

    email = data.get("email")
    password = data.get("password")

    # validação básica
    if not email or not password:
        return jsonify({"error": "Preencha todos os campos"}), 400

    result = authenticate_user(email, password)

    if result["status"] == "error":
        return jsonify({"error": result["message"]}), result["code"]

    return jsonify({
        "message": "Login realizado com sucesso",
        "user": result["user"]
    }), 200