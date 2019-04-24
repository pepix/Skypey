import { SET_TYPING_VALUE, SEND_MESSAGE, EDIT_MESSAGE, DISABLE_EDIT_MODE } from "../constants/action-types";

export default function typing(state = "", action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;

    case SEND_MESSAGE:
    case EDIT_MESSAGE:
    case DISABLE_EDIT_MODE:
      return "";
      
    default:
      return state;
  }
}