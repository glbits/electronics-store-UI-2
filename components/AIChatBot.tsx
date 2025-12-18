import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { MOCK_PRODUCTS, formatCurrency } from '../constants';

// Initial greeting
const INITIAL_MESSAGE = {
  role: 'assistant',
  content: "Namaste! I'm ElectroBot ⚡. I can help you find products, compare specs, or answer technical questions about our electronics in India. How can I help you today?"
};

export const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{role: string, content: string}>>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Context for the AI
      const productContext = MOCK_PRODUCTS.map(p => 
        `- ${p.name} (${formatCurrency(p.price)}, ID: ${p.id}): ${p.shortDescription}. Specs: ${JSON.stringify(p.specs)}`
      ).join('\n');

      const systemPrompt = `You are a helpful, knowledgeable sales assistant for 'ElectroMart', an electronics store located in India.
      Your tone is professional, friendly, and technical when needed.
      All prices mentioned must be in Indian Rupees (INR) using the ₹ symbol.
      
      Here is our current product catalog:
      ${productContext}
      
      Rules:
      1. Only recommend products from the catalog above.
      2. If asked about a product not in stock or not listed, politely say we don't have it yet in our Indian warehouse.
      3. Keep answers concise (under 100 words) unless detailed specs are asked.
      4. If recommending a product, mention its Name and Price (in ₹).
      5. Do not hallucinate products.
      6. Use terminology familiar to Indian customers (e.g., ISI mark, Monsoon deals, Festive season).
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: systemPrompt + "\n\nUser Question: " + userMessage }] }
        ]
      });

      const text = response.text || "I'm having trouble connecting to my brain right now. Please try again.";
      
      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm currently offline. Please browse our catalog manually!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-gradient-to-r from-secondary to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center gap-2 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles size={20} />
        <span className="font-semibold hidden md:inline">Ask AI Assistant</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden h-[500px]">
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Sparkles size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-sm">ElectroBot AI</h3>
                <p className="text-xs text-gray-300">Online • India Store</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] rounded-lg p-3 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-secondary text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-lg p-3 rounded-bl-none shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-secondary" />
                  <span className="text-xs text-gray-500">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about wires, fans..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-secondary text-white p-2 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2">
              AI assistant for ElectroMart India.
            </p>
          </div>
        </div>
      )}
    </>
  );
};