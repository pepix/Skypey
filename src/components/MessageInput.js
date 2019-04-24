import React from "react";
import store from "../store";
import { setTypingValue, sendMessage, editMessage, disableEditMode } from "../actions";
import "./MessageInput.css";

const MessageInput = ({ value }) => {
  const state = store.getState();

  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { typing, activeUserId, editingMessage } = state;
    if (editingMessage == null) {
      store.dispatch(sendMessage(typing, activeUserId));
    } else {
      store.dispatch(editMessage(activeUserId, editingMessage['messageNum'], typing));
      store.dispatch(disableEditMode());
    }
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;