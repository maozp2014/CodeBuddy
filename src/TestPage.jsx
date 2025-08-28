import React from 'react';
import SectionHeader from './components/SectionHeader/SectionHeader';
import StockItemCard from './components/StockItemCard/StockItemCard';
import MarketIndexTicker from './components/MarketIndexTicker/MarketIndexTicker';
import TradeIdeaCard from './components/TradeIdeaCard/TradeIdeaCard';
import StockDetailPanel from './components/StockDetailPanel/StockDetailPanel';
import Watchlist from './components/Watchlist/Watchlist';

const TestPage = () => {
  // 模拟数据
  const stocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 189.37, change: 1.23 },
    { symbol: 'MSFT', name: 'Microsoft Corporation', price: 420.72, change: -0.85 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 175.50, change: 2.34 }
  ];

  const indices = [
    { name: '道琼斯指数', value: '34,299.99', change: 0.42 },
    { name: '标普500', value: '4,358.34', change: -0.15 },
    { name: '纳斯达克', value: '13,463.97', change: 0.67 },
    { name: '罗素2000', value: '1,862.16', change: -0.23 }
  ];

  const tradeIdeas = [
    { 
      title: '苹果公司：买入评级，目标价$210', 
      summary: '分析师认为iPhone 15系列销量超预期，服务业务增长强劲，维持买入评级并上调目标价至210美元。',
      author: '张伟',
      time: '2小时前'
    },
    {
      title: '微软：云计算业务持续增长',
      summary: 'Azure云服务市场份额持续扩大，企业数字化转型需求旺盛，预计下季度财报将超预期。',
      author: '李娜',
      time: '昨天'
    }
  ];

  const stockDetail = {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 189.37,
    change: 1.23,
    lastUpdated: new Date().toLocaleTimeString(),
    stats: {
      '开盘价': '188.50',
      '最高价': '190.20',
      '最低价': '187.80',
      '成交量': '45,842,331',
      '市值': '2.95T',
      '市盈率': '29.34',
      '股息率': '0.51%',
      '52周最高': '198.23',
      '52周最低': '124.17'
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Watchlist />
      <SectionHeader title="美股金融信息平台组件测试" />
      
      <SectionHeader title="股票条目卡片" />
      {stocks.map((stock, i) => (
        <StockItemCard key={i} {...stock} onClick={() => console.log('Clicked:', stock.symbol)} />
      ))}
      
      <SectionHeader title="市场指数组件" />
      <MarketIndexTicker indices={indices} />
      
      <SectionHeader title="交易观点卡片" />
      {tradeIdeas.map((idea, i) => (
        <TradeIdeaCard key={i} {...idea} onClick={() => console.log('Clicked:', idea.title)} />
      ))}
      
      <SectionHeader title="股票详情面板" />
      <StockDetailPanel stock={stockDetail} />
    </div>
  );
};

export default TestPage;