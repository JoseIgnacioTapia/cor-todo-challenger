import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  task: {},
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

// Get a task
export const getTaskItem = createAsyncThunk(
  'tasks/getTaskItem',
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/todos/${id}`);
      const task = await res.json();

      return task;
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
      })
      .addCase(getTaskItem.pending, state => {
        state.loading = true;
      })
      .addCase(getTaskItem.fulfilled, (state, action) => {
        state.loading = false;
        state.task = action.payload;
      })
      .addCase(getTaskItem.rejected, state => {
        state.loading = false;
      });
  },
});

export default taskSlice.reducer;
