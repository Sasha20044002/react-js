import React from 'react';
import { Button, FormControl, Form, Col } from 'react-bootstrap';
import Message from "./Message";

export default class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            value: '',
            you: 'You:',
            bot: 'Bot:'
        }

        this.handleClick = this.handleClick.bind(this)
        this.value = this.value.bind(this)
    }

    handleClick() {
        this.setState({ messages: [...this.state.messages, `${this.state.bot} I am bot. I can't answer on your message.`, `${this.state.you} ${this.state.value}`]})
        this.setState({value: ''})
    }

    value(e) {
        this.setState({value: e.target.value})
    }

    render() {
        const messageElements = this.state.messages.map((text, index) => 
            <Message key={ index } text={ text }/>
        )

        return <div>
            <Col>
                { messageElements }
            </Col>
            <FormControl type="text" className="mx-sm-3" as="textarea" row={1} value={this.state.value} onChange={this.value}/><br />
            <Button variant="outline-secondary" className="ml-10" onClick={this.handleClick}>Отправить</Button>
        </div>
    }
}