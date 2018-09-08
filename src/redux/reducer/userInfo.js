
import { INITIAL_DATA } from "../actionTypes/userInfo";

const initialState = {};

export default function userInfo(state = initialState, action) {
    switch (action.type) {
      case INITIAL_DATA:
        return action.payload.data;
      default:
        return state;
    }
}
