from flask_cors import CORS
from flask import Flask, jsonify
from tickers import tickers
from moving import *
from goldenCrossTicker import *
from chart import *
import json
from datetime import datetime

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


@app.route('/api/chart', methods=['GET'])
def chart():

    ticker = "AAPL"
    stock = yf.Ticker(ticker)

    # Get the historical data for the last 200 days
    historical_data = stock.history(period="10d")

    historical_data.index.name = "Date"
    # Select the last 200 rows of data for the date and last price
    last_200 = historical_data.tail(200)["Close"]

    json_str = last_200.to_json()

    return jsonify(json_str)
