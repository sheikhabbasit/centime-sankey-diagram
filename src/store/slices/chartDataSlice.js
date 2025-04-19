import { createSlice } from "@reduxjs/toolkit";
import { randomizeID } from "../../utils/Internationalisation/randomizeIDs";

const initialState = {
  dataStreams: [],
  loading: false,
  error: null,
};

const chartDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    addInitialData(state, action) {
      state.dataStreams = action.payload;
    },
    addStream(state, action) {
      const { incoming, outgoing, amount } = action.payload;
      state.dataStreams.push({ id: randomizeID(), incoming, outgoing, amount });
    },
    editStream(state, action) {
      const { id, newStream } = action.payload;
      const dataStreamIndex = state.dataStreams.findIndex(
        (item) => item.id === id
      );
      if (dataStreamIndex !== -1) {
        state.dataStreams[dataStreamIndex] = {
          ...state.dataStreams[dataStreamIndex],
          ...newStream,
        };
      }
    },
    deleteStream(state, action) {
      const id = action.payload;
      state.dataStreams = state.dataStreams.filter((item) => item.id !== id);
    },
  },
});

export const {
  addStream,
  editStream,
  deleteStream,
  setLoading,
  setError,
  addInitialData,
} = chartDataSlice.actions;
export default chartDataSlice.reducer;
