import {
    SET_ACTIVE_USER_ID,
    SET_TYPING_VALUE,
    SEND_MESSAGE,
    EDIT_MESSAGE,
    ENABLE_EDIT_MODE,
    DISABLE_EDIT_MODE,
    // DELETE_MESSAGE,
} from "../constants/action-types";

export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
});

export const setTypingValue = value => ({
    type: SET_TYPING_VALUE,
    payload: value
})

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
})

export const editMessage = (activeUserId, messageNum, message) => ({
  type: EDIT_MESSAGE,
  payload: {
    activeUserId,
    messageNum,
    message
  }
})

export const enableEditMode = (activeUserId, messageNum) => ({
  type: ENABLE_EDIT_MODE,
  payload: {
    activeUserId,
    messageNum
  }
})

export const disableEditMode = () => ({
  type: DISABLE_EDIT_MODE,
  payload: null
})