import chartDataSlice, {
  addStream,
  deleteStream,
  editStream,
  setLoading,
  setError,
  addInitialData,
} from "./chartDataSlice";

describe("chartDataSlice", () => {
  it("should return the initial state", () => {
    const expectedState = {
      dataStreams: [],
      loading: false,
      error: null,
    };
    expect(chartDataSlice.reducer(undefined, {})).toEqual(expectedState);
  });

  it("should add a new stream", () => {
    const newDataStream = {
      id: "1",
      incoming: "Salary",
      outgoing: "Rent",
      amount: 1000,
    };
    const expectedState = {
      dataStreams: [newDataStream],
      loading: false,
      error: null,
    };
    expect(
      chartDataSlice.reducer(
        { dataStreams: [], loading: false, error: null },
        addStream(newDataStream)
      )
    ).toEqual(expectedState);
  });

  it("should edit a stream", () => {
    const newDataStream = {
      id: "1",
      incoming: "Salary",
      outgoing: "Groceries",
      amount: 500,
    };
    const expectedState = {
      dataStreams: [newDataStream],
      loading: false,
      error: null,
    };
    expect(
      chartDataSlice.reducer(
        {
          dataStreams: [
            { id: "1", incoming: "Salary", outgoing: "Rent", amount: 1000 },
          ],
          loading: false,
          error: null,
        },
        editStream({ id: "1", newStream: newDataStream })
      )
    ).toEqual(expectedState);
  });

  it("should delete a stream", () => {
    const expectedState = {
      dataStreams: [],
      loading: false,
      error: null,
    };
    expect(
      chartDataSlice.reducer(
        {
          dataStreams: [
            { id: "1", incoming: "Salary", outgoing: "Rent", amount: 1000 },
          ],
          loading: false,
          error: null,
        },
        deleteStream("1")
      )
    ).toEqual(expectedState);
  });

  it("should set the loading state", () => {
    const expectedState = {
      dataStreams: [],
      loading: true,
      error: null,
    };
    expect(
      chartDataSlice.reducer(
        { dataStreams: [], loading: false, error: null },
        setLoading(true)
      )
    ).toEqual(expectedState);
  });

  it("should set the error state", () => {
    const expectedState = {
      dataStreams: [],
      loading: false,
      error: "Error message",
    };
    expect(
      chartDataSlice.reducer(
        { dataStreams: [], loading: false, error: null },
        setError("Error message")
      )
    ).toEqual(expectedState);
  });

  it("should add initial data", () => {
    const data = [
      { id: "1", incoming: "Salary", outgoing: "Rent", amount: 1000 },
      { id: "2", incoming: "Freelance", outgoing: "Groceries", amount: 500 },
    ];
    const expectedState = {
      dataStreams: data,
      loading: false,
      error: null,
    };
    expect(
      chartDataSlice.reducer(
        { dataStreams: [], loading: false, error: null },
        addInitialData(data)
      )
    ).toEqual(expectedState);
  });
});
