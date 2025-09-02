import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPortfolios } from '../redux/portfolioSlice';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const PortfolioGrid = () => {
  const dispatch = useDispatch();
  const { portfolios, loading } = useSelector(state => state.portfolio);

  useEffect(() => { dispatch(fetchPortfolios()); }, [dispatch]);

  const columns = [
    { headerName: 'Asset', field: 'asset', sortable: true, filter: true },
    { headerName: 'Quantity', field: 'quantity' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Currency', field: 'currency' },
    { headerName: 'P&L', field: 'pnl' }
  ];

  const rowData = portfolios.flatMap(p => p.trades);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      {loading ? 'Loading...' : <AgGridReact rowData={rowData} columnDefs={columns} rowSelection="single" />}
    </div>
  );
};

export default PortfolioGrid;
