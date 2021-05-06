import React from 'react';
import Message from "./Message";

class MessageField extends React.Component {
    state = {
        messages: ['Привет!', 'Как дела?']
    }

    handleClick = () => {
        this.setState({ message: [...this.state.messages, 'Нормально']})
    }

    render() {
        const messageElements = this.state.messages.map((text, index) => {
            <Message key={ index } text={ text }/>
        })

        return <div>
            { messageElements }
            <button onClick={ this.handleClick }>Отправить сообщение</button>
        </div>
    }
}

export default MessageField;