# React UI Kit

一套基于 React 的通用 UI 组件库，包含常用的基础组件和金融数据展示组件。

## 特性

- 🎨 现代化设计风格
- 📦 开箱即用的组件
- 🎯 TypeScript 支持（待添加）
- 📱 响应式设计
- 🎨 可定制主题
- 📊 金融数据可视化组件

## 安装

```bash
npm install
```

## 开发

```bash
npm run dev
```

## 构建

```bash
npm run build
```

## 组件列表

### 基础组件
- Button - 按钮组件
- Card - 卡片组件  
- Input - 输入框组件
- SectionHeader - 区块标题组件

### 金融数据组件
- TVWatchlist - 交易视图股票列表组件
  - 支持股票数据表格展示
  - 支持列排序功能
  - 支持涨跌颜色显示
  - 支持行点击事件
- MarketIndexTicker - 市场指数行情组件
- StockItemCard - 股票项目卡片组件
- StockDetailPanel - 股票详情面板组件
- TradeIdeaCard - 交易想法卡片组件
- Watchlist - 自选股列表组件

## 使用示例

### 基础组件

```jsx
import { Button, Card, Input } from 'react-ui-kit'

function App() {
  return (
    <div>
      <Button variant="primary">主要按钮</Button>
      <Card title="标题">内容</Card>
      <Input placeholder="请输入" />
    </div>
  )
}
```

### TVWatchlist 组件

```jsx
import { TVWatchlist } from 'react-ui-kit'

const stocks = [
  { symbol: 'AAPL', name: '苹果公司', price: 182.63, change: 1.23, changePercent: 0.68 },
  { symbol: 'MSFT', name: '微软', price: 420.72, change: -0.45, changePercent: -0.11 }
];

function App() {
  const handleRowClick = (stock) => {
    console.log('点击了股票:', stock);
  };

  return (
    <TVWatchlist 
      stocks={stocks}
      onRowClick={handleRowClick}
    />
  )
}
```

## 开发说明

本项目的组件由 CodeBuddy AI Agent 协助开发实现。目前已完成的功能包括：

1. TVWatchlist 组件的实现与测试
   - 表格显示：正确显示股票列表，包括代码、名称、价格、涨跌和涨幅%列
   - 颜色显示：涨跌和涨幅%列根据正负值显示不同颜色（正值为绿色，负值为红色）
   - 排序功能：点击表头可以对列进行排序，排序方向正确（升序/降序）
   - 行点击事件：点击表格行时，显示相应的股票信息

2. 测试页面的开发
   - 创建了 WatchlistDemo.jsx 用于测试 TVWatchlist 组件功能
   - 修复了页面白屏问题
   - 优化了应用程序结构

更多开发历史请查看 [CHANGELOG.md](./CHANGELOG.md)

## 许可证

MIT
