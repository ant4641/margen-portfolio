import React, { useState, useRef, useEffect } from 'react';
import { PRESET_AI_QUESTIONS, MARGEN_PROFILE } from '../data/resumeData';
import { X, Send, Bot, User, Sparkles, Loader2, Zap } from 'lucide-react';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  source?: string;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `你好！我是林新善 (Margen Lin) 的 AI 職涯問答特使 🤖。\n您可以問我關於他的 5+ 年後端與全端開發經驗、MariaDB MVCC 重構、Kafka 千萬級壓測、證券開戶系統加速 87%、IoT 軟硬整合或是資深主管的點評建議！`,
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: data.reply || '不好意思，目前暫時無法回覆，請嘗試重新提問。',
        source: data.source,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      console.error("Failed to send AI chat message:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'assistant',
          text: '抱歉，與伺服器連線發生異常。林新善具備 5+ 年後端經驗，歡迎直接寄信至 hsinshanlin@gmail.com 交流！',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1115]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0A0C10] border border-[#2D3748] rounded-lg shadow-2xl overflow-hidden h-[85vh] flex flex-col font-sans">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#0F1115] border-b border-[#2D3748] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#131720] border border-[#2D3748] flex items-center justify-center text-emerald-400">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>林新善 AI 職涯特使</span>
              </h3>
              <p className="text-xs text-slate-400">
                專門為展場訪客與面試主管解答關於林新善的技術與經歷
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded bg-[#131720] text-slate-400 hover:text-white border border-[#2D3748] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preset Prompt Chips */}
        <div className="px-4 py-2 bg-[#0F1115]/60 border-b border-[#2D3748] flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
          <span className="text-emerald-400 shrink-0 font-bold">熱門提問：</span>
          {PRESET_AI_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              disabled={loading}
              className="px-3 py-1 rounded bg-[#131720] hover:bg-[#1C232E] hover:border-emerald-500/60 border border-[#2D3748] text-slate-300 hover:text-emerald-400 whitespace-nowrap transition-all shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 border ${
                msg.sender === 'user' 
                  ? 'bg-emerald-600 border-emerald-500 text-slate-950' 
                  : 'bg-[#131720] text-emerald-400 border-[#2D3748]'
              }`}>
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`max-w-[80%] p-4 rounded text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-emerald-600 text-slate-950 font-bold rounded-tr-none'
                  : 'bg-[#0F1115] text-slate-200 border border-[#2D3748] rounded-tl-none whitespace-pre-wrap'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#131720] text-emerald-400 border border-[#2D3748] flex items-center justify-center">
                <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
              </div>
              <div className="p-3.5 rounded bg-[#0F1115] border border-[#2D3748] text-slate-400 text-xs flex items-center gap-2">
                <span>AI 特使正在檢索履歷資料...</span>
              </div>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-[#0F1115] border-t border-[#2D3748]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="輸入問題，例如：他有什麼 DDD 重構經驗？"
              disabled={loading}
              className="flex-1 px-4 py-3 rounded bg-[#0A0C10] border border-[#2D3748] text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-5 py-3 rounded bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-slate-950 font-mono font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md shadow-emerald-500/20"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">傳送</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
