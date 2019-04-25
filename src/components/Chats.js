import React, { Component } from "react";
import store from "../store";
import { enableEditMode, setTypingValue } from "../actions";
import "./Chats.css";

function clickMessage(message, userId) {
  if (message.is_user_msg) {
    store.dispatch(enableEditMode(userId, message.number));
    store.dispatch(setTypingValue(message.text));
  }
}

const Chat = ({ message, userId }) => {
  const { text, is_user_msg } = message;

  return (
    <div className={`ChatContainer ${is_user_msg ? "is-user-msg" : ""}`}>
      <button　className="deleteButton">×</button>
      <span id="msg" name="msg" className={`Chat ${is_user_msg ? "is-user-msg" : ""}`} onClick={clickMessage.bind(null, message, userId)}>{text}</span>
    </div>
  );
};

class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };

  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} userId={this.props.userId} key={message.number}/>
        ))}
      </div>
    );
  }
}

export default Chats;