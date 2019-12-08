import { LOAD_START, ADD_POST, SELECT_SMURF } from "../actions/actions";
const REMOVE_SMURF = "REMOVE_SMURF";

export const initialState = {
  isLoading: false,
  smurf: [
    {
      name: "",
      age: "",
      height: "",
      selected: false,
      id: null
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START:
      return {
        ...state,
        isLoading: true
      };
    case ADD_POST:
      return {
        ...state,
        smurf: action.payload,

        isLoading: false
      };
    case SELECT_SMURF:
      console.log("im here");
      return {
        smurf: state.smurf.map((smurfs, idx) =>
          idx === action.idx
            ? { ...smurfs, selected: !smurfs.selected }
            : smurfs
        )
      };
    case REMOVE_SMURF:
      return {
        ...state,
        smurf: state.smurf.filter(item => {
          return item.selected === false;
        })
      };

    default:
      return state;
  }
};

export default reducer;
