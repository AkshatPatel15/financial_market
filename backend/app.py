from flask_cors import CORS
from flask import Flask, jsonify
from tickers import tickers
from moving import *
from goldenCrossTicker import *

app = Flask(__name__)
CORS(app)


@app.route('/api/tickers', methods=['GET'])
def get_ticker():
    return tickers


@app.route('/api/data', methods=['GET'])
def get_data():
    list = []

    tickers = ["ATVI", "BIO", "MSFT", "AAPL"]
    for i in tickers:
        check = goldenCrossTicker(i, "1d", "1y", 50, 200)
        if check == True:
            list.append(i)
    return list
