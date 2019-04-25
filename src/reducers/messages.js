import { getMessages } from "../static-data";
import { SEND_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from "../constants/action-types";
const _ = require("lodash");


export default function messages(state = getMessages(10), action) {

  switch (action.type) {
    case SEND_MESSAGE: {
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = +_.keys(allUserMsgs).pop() + 1;

      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };
    }

    case EDIT_MESSAGE: {
      const { activeUserId, messageNum, message } = action.payload;
      let allUserMsgs = state[activeUserId];
      allUserMsgs[messageNum] = {
        number: messageNum,
        text: message,
        is_user_msg: true
      };

      return {
        ...state,
        [activeUserId]: {
          ...allUserMsgs
        }
      }
    }

    case DELETE_MESSAGE: {
      const { userId, messageNum } = action.payload;
      let allUserMsgs = state[userId];
      delete allUserMsgs[messageNum];

      return {
        ...state,
        [userId]: {
          ...allUserMsgs
        }
      }
    }

    default:
      return state;
  }
}