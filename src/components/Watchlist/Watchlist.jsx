function Watchlist({ stocks = [] }) {
  return (
    <div className="watchlist-container">
      <h2>股票关注列表</h2>
      <div className="stocks-list">
        {stocks.map(stock => (
          <div key={stock.symbol} className="stock-item">
            <h3>{stock.name} ({stock.symbol})</h3>
            <p>价格: ${stock.price.toFixed(2)}</p>
            <p style={{ color: stock.change >= 0 ? 'green' : 'red' }}>
              涨跌: {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WatchlistWrapper(props) {
  console.log('Watchlist rendering');
  try {
    const defaultStocks = [
      { symbol: 'AAPL', name: 'Apple Inc.', price: 182.63, change: 1.23 },
      { symbol: 'MSFT', name: 'Microsoft', price: 420.72, change: -0.45 }
    ];
    return <Watchlist {...props} stocks={defaultStocks} />;
  } catch (e) {
    console.error('Watchlist error:', e);
    return <div>Watchlist加载失败</div>;
  }
}

export default React.memo(WatchlistWrapper);
