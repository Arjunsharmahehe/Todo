import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch cat quote
export const fetchCatQuote = createAsyncThunk("quote/fetch", async () => {
  const res = await fetch("https://catfact.ninja/fact");
  const data = await res.json();
  console.log("data.fact:", data.fact)
  return data.fact;
});

// Struct for the state of quote
interface QuoteState {
    quote: string | null;
    loading: boolean;
    error: string | null;
  }

// Initial state of the quotes
const initialState: QuoteState = {
    quote: null,
    loading: false,
    error: null,
  };

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatQuote.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCatQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.quote = action.payload;
      })
      .addCase(fetchCatQuote.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch quote";
      });
  },
});

export default quoteSlice.reducer;
