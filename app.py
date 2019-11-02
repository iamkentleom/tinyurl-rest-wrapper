#!/usr/bin/env python3

from flask import Flask, jsonify, request
import requests as req
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/shorten')
def shorten_url():
    url = request.args.get('url', None)
    shorten = req.get(f'https://tinyurl.com/api-create.php?url={url}').text
    res = {
        'tinyurl' : shorten
    }

    return jsonify(res)

if __name__ == '__main__':
    app.run()