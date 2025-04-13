
import { useState } from 'react';
import { Bot, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState<{type: 'user' | 'ai'; message: string}[]>([
    {type: 'ai', message: 'Hello! I\'m your AI assistant. How can I help you with your ERP tasks today?'}
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message to conversation
    setConversation(prev => [...prev, {type: 'user', message}]);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "I can help you with that! Let me pull up the relevant information for you.",
        "Based on your recent data, I suggest focusing on inventory management this week.",
        "Your sales figures are looking strong this quarter! Would you like me to generate a detailed report?",
        "I've analyzed your financial data and found some optimization opportunities. Would you like to review them?",
        "I can create those reports for you. Would you like me to schedule them as recurring tasks?",
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setConversation(prev => [...prev, {type: 'ai', message: randomResponse}]);
    }, 1000);
    
    setMessage('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-[360px] h-[480px] flex flex-col border border-neutral-200 animate-fade-in">
          <div className="flex items-center justify-between p-4 border-b border-neutral-200">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <span className="ml-2 font-medium">AI Assistant</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {conversation.map((item, index) => (
              <div 
                key={index} 
                className={cn(
                  "max-w-[80%] p-3 rounded-lg",
                  item.type === 'user' ? 
                    "bg-primary text-white ml-auto" : 
                    "bg-neutral-100 text-neutral-800"
                )}
              >
                {item.message}
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-neutral-200">
            <div className="flex space-x-2">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="resize-none min-h-[60px]"
              />
              <Button onClick={handleSendMessage} className="h-full">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Button 
          onClick={() => setIsOpen(true)} 
          className="w-12 h-12 rounded-full"
        >
          <Bot size={24} />
        </Button>
      )}
    </div>
  );
};

export default AIAssistant;
