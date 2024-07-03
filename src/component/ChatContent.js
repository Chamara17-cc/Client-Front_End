import React, { useState } from 'react';
import axios from 'axios';

function ChatContent() {
    const [message, setMessage] = useState('');
    const [botMessages, setBotMessages] = useState([]);

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (message.trim() !== '') {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/chat?inputText=${encodeURIComponent(message)}`
                );
                const botMessage = response.data;
                setBotMessages([...botMessages, { text: botMessage, sender: 'bot' }]);
            } catch (error) {
                console.error('Error sending message:', error);
            }

            setMessage('');
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-box">
                {botMessages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="message-input">
                <input
                    type="text"
                    value={message}
                    onChange={handleChange}
                    placeholder="Type your message..."
                    className="input-field"
                />
                <button type="submit" className="send-button">Send</button>
            </form>
        </div>
    );
}

export default ChatContent;
