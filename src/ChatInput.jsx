import React, { useState } from "react";

function ChatInput({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (question.trim()) {
      onSubmit(question);
      setQuestion("");
    }
  };

  const [question, setQuestion] = useState("");

  return (
    <div className="container py-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="question">Ask Question</label>
          <input
            type="text"
            id="question"
            value={question}
            className="form-control"
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatInput;
