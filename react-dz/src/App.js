import React from 'react';
import MessageField from './components/MessageField'
import Message from './components/Message'

const App = () => {
    return (
        <div>
            <MessageField>
                <Message></Message>
            </MessageField>
        </div>
    );
};

export default App;