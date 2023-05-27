#!/usr/bin/env python3

from flask import Flask, jsonify, request, render_template
import requests as req
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods = ['GET', 'POST'])
def index():
    if request.method == 'POST':
        url = request.values.get('url', request.json.get('url', None))
        print(url)
        tinyurl = req.get(f'https://tinyurl.com/api-create.php?url={url}').text

        return jsonify({
            'tinyurl': tinyurl
        })

    if request.method == 'GET':
        return render_template('index.html')

@app.errorhandler(404)
def not_found(e):
    return render_template('404.html')


if __name__ == '__main__':
    app.run()