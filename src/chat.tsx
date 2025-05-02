import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Here you would typically send the input to the backend and get a response
      // For now, we'll just simulate a response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a simulated response.', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`p-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-2 rounded-l-lg bg-gray-700 text-white"
          />
          <button type="submit" className="p-2 rounded-r-lg bg-blue-600 hover:bg-blue-700">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
