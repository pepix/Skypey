import { ENABLE_EDIT_MODE, DISABLE_EDIT_MODE } from "../constants/action-types";

export default function editingMessage(state = null, action) {
  switch (action.type) {
    case ENABLE_EDIT_MODE:
      return action.payload;

    case DISABLE_EDIT_MODE:
      return null;          

    default:
      return state;
  }
}