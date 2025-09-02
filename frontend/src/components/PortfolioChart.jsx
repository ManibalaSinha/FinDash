import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useSelector } from 'react-redux';

const PortfolioChart = () => {
  const chartRef = useRef();
  const { portfolios } = useSelector(state => state.portfolio);

  useEffect(() => {
    if (!portfolios.length) return;

    const chart = echarts.init(chartRef.current);
    const data = portfolios.map(p => ({
      name: p.name,
      value: p.trades.reduce((acc, t) => acc + t.pnl, 0)
    }));

    chart.setOption({
      title: { text: 'Portfolio P&L' },
      tooltip: {},
      series: [{ type: 'pie', data }]
    });

    return () => chart.dispose();
  }, [portfolios]);

  return <div ref={chartRef} style={{ width: '100%', height: 400 }} />;
};

export default PortfolioChart;
