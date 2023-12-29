const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIcecreams: 20,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  }, //you use extra reducers if you want actions to be performed on different slices
  extraReducers: (builder) => {
    // builder.addCase("cake/ordered", (state) => {
        builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

module.exports = {
  icecreamActions: icecreamSlice.actions,
  icecreamReducer: icecreamSlice.reducer,
};
