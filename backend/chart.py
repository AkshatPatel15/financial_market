import yfinance as yf
import pandas as pd

ticker = "AAPL"
stock = yf.Ticker(ticker)

# Get the historical data for the last 200 days
historical_data = stock.history(period="200d")

# Reset the index of the DataFrame
historical_data = historical_data.reset_index()

# Select the last 200 rows of data for the date and last price
last_200 = historical_data.tail(200)[["Date", "Close"]]

# Extract only the date from the Date column
last_200["Date"] = pd.to_datetime(last_200["Date"]).dt.date

print(last_200)
