import chartDataReducer, {
  addStream,
  editStream,
  deleteStream,
  addInitialData,
  setError,
  setLoading,
} from "./chartDataSlice";

describe("chartDataSlice", () => {
  const initialState = {
    dataStreams: [],
    loading: false,
    error: null,
  };

  it("should add a new stream", () => {
    const newDataStream = {
      id: "1",
      incoming: "Salary",
      outgoing: "Rent",
      amount: 1000,
    };
    const state = chartDataReducer(initialState, addStream(newDataStream));

    expect(state.dataStreams).toHaveLength(1);
    expect(state.dataStreams[0]).toEqual(newDataStream);
  });

  it("should edit a stream", () => {
    const initialStateWithData = {
      dataStreams: [
        {
          id: "1",
          incoming: "Salary",
          outgoing: "Groceries",
          amount: 500,
        },
      ],
      loading: false,
      error: null,
    };

    const updatedStream = {
      id: "1",
      newFlow: {
        incoming: "Salary",
        outgoing: "Rent",
        amount: 1000,
      },
    };

    const state = chartDataReducer(
      initialStateWithData,
      editStream(updatedStream)
    );

    expect(state.dataStreams).toHaveLength(1);
    expect(state.dataStreams[0].amount).toBe(1000);
    expect(state.dataStreams[0].outgoing).toBe("Rent");
  });

  it("should delete a stream", () => {
    const initialStateWithData = {
      dataStreams: [
        { id: "1", incoming: "Salary", outgoing: "Rent", amount: 1000 },
        { id: "2", incoming: "Bonus", outgoing: "Groceries", amount: 500 },
      ],
      loading: false,
      error: null,
    };

    const state = chartDataReducer(initialStateWithData, deleteStream("1"));

    expect(state.dataStreams).toHaveLength(1);
    expect(state.dataStreams[0].id).toBe("2");
  });

  it("should set loading state", () => {
    const loadingState = chartDataReducer(initialState, setLoading(true));
    expect(loadingState.loading).toBe(true);

    const notLoadingState = chartDataReducer(initialState, setLoading(false));
    expect(notLoadingState.loading).toBe(false);
  });

  it("should set error state", () => {
    const errorState = chartDataReducer(
      initialState,
      setError("Something went wrong")
    );
    expect(errorState.error).toBe("Something went wrong");
  });

  it("should add initial data", () => {
    const initialData = [
      { id: "1", incoming: "Salary", outgoing: "Rent", amount: 1000 },
      { id: "2", incoming: "Bonus", outgoing: "Groceries", amount: 500 },
    ];
    const state = chartDataReducer(initialState, addInitialData(initialData));

    expect(state.dataStreams).toHaveLength(2);
    expect(state.dataStreams).toEqual(initialData);
  });
});
