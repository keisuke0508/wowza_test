# -*- coding: utf-8 -*-

import config
from flask import Flask, render_template
import os
import json

app = Flask(__name__)
app.secret_key = os.urandom(24)


@app.route("/", methods=["GET"])
def get():
    return render_template(
        "index.html",
        settings=config.SETTINGS
    )


if __name__ == "__main__":
    app.run()
