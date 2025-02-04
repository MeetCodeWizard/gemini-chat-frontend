import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatResponse from "./ChatResponse";
import { fetchChatResponse } from "./services/api";

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);

    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      alert("Failed to get the response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <header className="bg-primary text-white text-center py-4">
          <h3>Gemini Chatbot</h3>
        </header>
        {/* Input */}
        <ChatInput onSubmit={handleQuestionSubmit} />
        {/* Response */}
        {loading ? <p className="text-center">Loading</p> : ""}
        <ChatResponse response={response} />
      </div>
    </>
  );
}

export default App;
