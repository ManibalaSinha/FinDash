import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import PortfolioGrid from './components/PortfolioGrid';
import PortfolioChart from './components/PortfolioChart';

function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px' }}>
        <h1>FinDash – Investment Portfolio Dashboard</h1>
        <PortfolioGrid />
        <PortfolioChart />
      </div>
    </Provider>
  );
}

export default App;
