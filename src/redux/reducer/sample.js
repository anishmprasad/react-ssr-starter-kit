import {
    SAMPLEDATA,
    UPDATEINPUT,
    USERINFO
} from "../actionTypes/sample";

const initialState = {};

export default function sampleReducer(state = initialState, action) {
    switch (action.type) {
      case SAMPLEDATA:
        return { ...state, sample: action.payload };
      case UPDATEINPUT:
        return { ...state, input: action.payload };
      case USERINFO:
        return { ...state, userInfo: action.payload.data };
      default:
        return state;
    }
}
