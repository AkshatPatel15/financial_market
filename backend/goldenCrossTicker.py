from tickers import tickers
from moving import *
import yfinance as yf
import pandas as pd


def goldenCrossTicker(ticker, interval, period, window1, window2):

    signals = crossover(ticker, interval, period, window1, window2)
    if True in signals['bullish_crossover'].values:
        return True
