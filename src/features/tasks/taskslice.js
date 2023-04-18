import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  loading: false,
};

// Get tasks
export const getTasksItems = createAsyncThunk(
  'tasks/getTasksItems',
  async thunkAPI => {
    try {
      const resp = await fetch('http://localhost:3000/todos');
      const data = await resp.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTasksItems.pending, state => {
        state.loading = true;
      })
      .addCase(getTasksItems.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(getTasksItems.rejected, state => {
        state.loading = true;
      });
  },
});

export default taskSlice.reducer;
