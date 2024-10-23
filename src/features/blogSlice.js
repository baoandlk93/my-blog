import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {findALlBlogs, findBlogById} from "../service/blogService.js";

const initialState = {
  blogs: null,
  blog: null
};

export const getBlogs = createAsyncThunk(
  "blogs",
  async ({keyword}, {rejectWithValue}) => {
    const response = await findALlBlogs({keyword});
    if (response.status !== 200) {
      return rejectWithValue(response.data.message);
    }
    return response.data;
  }
);

export const getBlog = createAsyncThunk(
  "blog",
  async ({id}, {rejectWithValue}) => {
    const response = await findBlogById({id});
    if (response.status !== 200) {
      return rejectWithValue(response.data.message);
    }
    return response.data;
  }
);

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    setBlog: (state, action) => {
      state.blog = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getBlogs.fulfilled, (state, action) => {
          state.blogs = action.payload.articles;
        })
      .addCase(
        getBlogs.pending, (state, action) => {
          state.blogs = action.payload;
        })
      .addCase(
        getBlogs.rejected, (state, action) => {
          state.blogs = action.payload;
        })
      .addCase(getBlog.rejected, (state, action) => {
        state.blog = action.payload;
      }).addCase(getBlog.pending, (state, action) => {
      state.blog = action.payload;
    }).addCase(getBlog.fulfilled, (state, action) => {
      state.blog = action.payload;
    });
  },
})
export const selectBlogs = (state) => state.blog.blogs;
export default blogSlice.reducer;
