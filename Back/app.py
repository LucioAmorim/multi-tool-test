from flask import Flask
from routes import bp
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
FRONT_DIR = os.path.abspath(os.path.join(BASE_DIR, "../Front"))

app = Flask(
    __name__,
    static_folder=os.path.join(FRONT_DIR, "static"),
    template_folder=os.path.join(FRONT_DIR, "templates")
)

# registra rotas da aplicação
app.register_blueprint(bp)


@app.route("/ping")
def ping():
    return {"status": "ok"}


if __name__ == "__main__":
    print("APP INICIADO CORRETAMENTE")
    app.run(debug=True, use_reloader=False)