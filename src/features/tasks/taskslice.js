import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  allTasks: [],
  task: { title: '', priority: '', state: '', description: '' },
  loading: false,
  error: null,
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
      const res = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      });
      const taskCreated = await res.json();
      return taskCreated;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

// Updates task
export const updateTaskItem = createAsyncThunk(
  'tasks/updateTaskItem',
  async (data, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/todos/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedTask = await res.json();
      
      return updatedTask;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

// Delete Task
export const deleteTaskItem = createAsyncThunk(
  'tasks/deleteTaskItem',
  async (id, thunkApi) => {
    try {
      const res = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      
      return data;
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
    setFilter: (state, action) => {
      const allTasks = state.allTasks;
      let tasksFiltered = allTasks;

      if (action.payload.priority !== 'default') {
        tasksFiltered = tasksFiltered.filter(
          item => item.priority === action.payload.priority
        );
      }

      tasksFiltered = tasksFiltered.length > 0 ? tasksFiltered : allTasks;
      if (action.payload.state !== 'default') {
        
        tasksFiltered = tasksFiltered.filter(
          item => item.state === action.payload.state
        );
      }

      state.tasks = tasksFiltered;
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
        state.allTasks = action.payload;
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
      })
      .addCase(updateTaskItem.pending, state => {
        state.loading = true;
      })
      .addCase(updateTaskItem.fulfilled, (state, action) => {
        state.loading = false;
        state.task = action.payload;
      })
      .addCase(updateTaskItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(deleteTaskItem.pending, state => {
        state.loading = true;
      })
      .addCase(deleteTaskItem.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(deleteTaskItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { setFilter } = taskSlice.actions;

export default taskSlice.reducer;
