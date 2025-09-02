const portfolios = [
  {
    id: '1',
    name: 'Tech Portfolio',
    trades: [
      { id: 't1', asset: 'AAPL', quantity: 50, price: 180, currency: 'USD', pnl: 200 },
      { id: 't2', asset: 'GOOG', quantity: 20, price: 2800, currency: 'USD', pnl: -100 }
    ]
  }
];

module.exports = {
  Query: {
    getPortfolios: () => portfolios,
    getTrades: (_, { portfolioId }) => portfolios.find(p => p.id === portfolioId)?.trades || []
  },
  Subscription: {
    tradeUpdated: {
      subscribe: (_, { portfolioId }) => {
        // placeholder: add PubSub for real-time updates
      }
    }
  }
};
