from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/message")
def message():
    return jsonify({"message": "I'm Aurora and I love to poo"})

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    # For now just print to console
    print(f"New message from {name} ({email}): {message}")

    return jsonify({"status": "Message received!"})

if __name__ == "__main__":
    app.run(debug=True)
