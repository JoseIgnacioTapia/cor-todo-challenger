import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  task: { title: '', priority: '', state: '', description: '' },
  loading: false,
  error: null,
  validationsErrors: {},
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
      throw error;
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
      console.log(task);
      return task;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

// Create a task
export const createTaskItem = createAsyncThunk(
  'tasks/createTaskItem',
  async (data, thunkAPI) => {
    try {
      await fetch('http://localhost:3000/todos', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setFormErrors: (state, action) => {
      state.formErrors = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTasksItems.pending, state => {
        state.loading = true;
      })
      .addCase(getTasksItems.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(getTasksItems.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error;
      })
      .addCase(getTaskItem.pending, state => {
        state.loading = true;
      })
      .addCase(getTaskItem.fulfilled, (state, action) => {
        state.loading = false;
        state.task = action.payload;
      })
      .addCase(getTaskItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(createTaskItem.pending, state => {
        state.loading = true;
      })
      .addCase(createTaskItem.fulfilled, state => {
        state.loading = false;
      })
      .addCase(createTaskItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { setFormErrors } = taskSlice.actions;

export default taskSlice.reducer;
