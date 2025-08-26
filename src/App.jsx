import React from 'react'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Input from './components/Input/Input'
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>React UI Kit</h1>
        <p>一套可复用的React UI组件库</p>
      </header>

      <div className="components-grid">
        <div className="component-card">
          <h3>Button 组件</h3>
          <Button>默认按钮</Button>
          <Button variant="primary" style={{ marginLeft: '10px' }}>主要按钮</Button>
          <Button variant="danger" style={{ marginLeft: '10px' }}>危险按钮</Button>
        </div>

        <div className="component-card">
          <h3>Card 组件</h3>
          <Card title="卡片标题">
            <p>这是一个卡片组件的内容区域，可以放置任何内容。</p>
          </Card>
        </div>

        <div className="component-card">
          <h3>Input 组件</h3>
          <Input placeholder="请输入内容" />
          <Input type="password" placeholder="请输入密码" style={{ marginTop: '10px' }} />
        </div>
      </div>
    </div>
  )
}

export default App