import yfinance as yf
import pandas as pd


def MovingAvg(ticker, interval, period, window1, window2):
    ticker = yf.Ticker(ticker)

    # Get the stock's historical data
    data = ticker.history(interval=interval, period=period)

    # Calculate the 50-day moving average
    ma50 = data["Close"].rolling(window=window1).mean()

    # Calculate the 200-day moving average
    ma200 = data["Close"].rolling(window=window2).mean()

    # Combine the moving averages into a DataFrame
    df = pd.DataFrame({"Close": data["Close"], "MA50": ma50, "MA200": ma200})
    return df.tail(5)


def crossover(ticker, interval, period, window1, window2):
    # Calculate the moving averages using the MovingAvg() function
    df = MovingAvg(ticker, interval, period, window1, window2)

    # Identify bullish crossovers (50-day MA crosses above 200-day MA)
    bullish_crossover = (df["MA50"] > df["MA200"]) & (
        df["MA50"].shift(1) < df["MA200"].shift(1))

    # Identify bearish crossovers (50-day MA crosses below 200-day MA)
    bearish_crossover = (df["MA50"] < df["MA200"]) & (
        df["MA50"].shift(1) > df["MA200"].shift(1))

    # Create a new DataFrame to store the crossover signals
    signals = pd.DataFrame(index=df.index)
    signals["bullish_crossover"] = bullish_crossover
    signals["bearish_crossover"] = bearish_crossover
    return signals
