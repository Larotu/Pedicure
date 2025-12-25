
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Footprints, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: "Hello! I'm Sana, your AI Foot Health Consultant. How can I help you with your foot care journey today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: `System context: You are "Sana", an AI assistant for SanaPed, a luxury medical podiatry clinic. You are professional, knowledgeable about foot health, and empathetic. Do not provide official medical diagnoses, always suggest professional consultation if symptoms sound serious. Keep responses concise and clinical yet warm. User: ${userMessage}` }] }
        ],
        config: {
          systemInstruction: "You are a professional medical pedicure consultant named Sana.",
          temperature: 0.7,
        }
      });

      const aiResponse = response.text || "I'm sorry, I'm having trouble connecting right now. Please try again or book an appointment for a professional consultation.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Gemini API Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I apologize, but I'm experiencing technical difficulties. Our team can help you if you call us directly at +31 20 123 4567." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Trigger Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-primary hover:bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 group relative"
        >
          <Sparkles className="absolute -top-1 -right-1 text-white animate-pulse" size={16} />
          <MessageSquare size={28} />
          <span className="absolute right-20 bg-white text-text-main-light px-4 py-2 rounded-xl text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-stone-100">
            Ask Sana AI
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[350px] sm:w-[400px] h-[550px] bg-white dark:bg-card-dark rounded-[2.5rem] shadow-2xl border border-stone-100 dark:border-stone-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-12 duration-500">
          {/* Header */}
          <div className="bg-primary p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Footprints size={20} />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg leading-tight">Sana AI</h4>
                <p className="text-[10px] uppercase tracking-widest opacity-70 font-bold">Foot Health Consultant</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-stone-100 dark:bg-stone-800 text-text-main-light dark:text-text-main-dark rounded-tl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-100 dark:bg-stone-800 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-primary" />
                  <span className="text-sm text-text-muted-light">Sana is thinking...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Footer Input */}
          <div className="p-4 border-t border-stone-100 dark:border-stone-800 bg-stone-50/50 dark:bg-card-dark">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about foot pain, services..."
                className="flex-1 bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary hover:bg-secondary text-white p-2 rounded-xl transition-colors disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-[10px] text-center text-text-muted-light mt-3">
              AI-generated advice. Consult our specialists for clinical diagnosis.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
