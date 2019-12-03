import { LOAD_START, ADD_POST } from "../actions/actions";

export const initialState = {
  isLoading: false,
  smurf: [
    {
      name: "",
      age: 0,
      height: "",
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
    default:
      return state;
  }
};

export default reducer;
