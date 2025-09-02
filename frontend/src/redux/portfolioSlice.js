import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

export const fetchPortfolios = createAsyncThunk(
  'portfolio/fetchPortfolios',
  async () => {
    const result = await client.query({
      query: gql`
        query {
          getPortfolios {
            id
            name
            trades {
              id
              asset
              quantity
              price
              currency
              pnl
            }
          }
        }
      `
    });
    return result.data.getPortfolios;
  }
);

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: { portfolios: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolios.pending, (state) => { state.loading = true; })
      .addCase(fetchPortfolios.fulfilled, (state, action) => {
        state.loading = false;
        state.portfolios = action.payload;
      })
      .addCase(fetchPortfolios.rejected, (state) => { state.loading = false; });
  }
});

export default portfolioSlice.reducer;
