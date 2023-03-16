import ssl
import pandas as pd
ssl._create_default_https_context = ssl._create_unverified_context

table = pd.read_html(
    'https://en.wikipedia.org/wiki/List_of_S%26P_500_companies')
df = table[0]

tickers = df['Symbol'].values.tolist()
