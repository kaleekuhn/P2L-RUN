import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Send, 
  Sparkles, 
  FileText, 
  BrainCircuit,
  Lightbulb,
  Target,
  Heart,
  Zap,
  MessageSquare
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const quickActions = [
  { icon: FileText, label: 'Resume Review', color: 'from-blue-500 to-cyan-500' },
  { icon: Lightbulb, label: 'Career Advice', color: 'from-purple-500 to-pink-500' },
  { icon: Target, label: 'Goal Setting', color: 'from-green-500 to-emerald-500' },
  { icon: MessageSquare, label: 'Interview Prep', color: 'from-orange-500 to-red-500' }
];

const sampleMessages = [
  { type: 'user', content: 'How can I improve my resume for tech jobs?' },
  { type: 'ai', content: 'I\'d be happy to help you optimize your resume for tech positions! Here are key areas to focus on:\n\n1. **Technical Skills Section**: List your programming languages, frameworks, and tools prominently\n2. **Project Highlights**: Include 2-3 relevant projects with measurable outcomes\n3. **Action Verbs**: Use words like "developed," "implemented," "optimized"\n4. **Quantify Impact**: Show results with numbers (e.g., "Improved performance by 40%")\n\nWould you like me to review specific sections of your resume?' },
  { type: 'user', content: 'Yes, can you look at my experience section?' },
  { type: 'ai', content: 'Of course! Please paste your experience section, and I\'ll provide specific feedback on:\n• Impact and achievements\n• Technical terminology\n• Relevance to your target roles\n• Areas for improvement\n\nI\'m here to help make your experience shine! ✨' }
];

export default function AISupport() {
  const [messages, setMessages] = useState(sampleMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = { type: 'user', content: inputValue };
    setMessages([...messages, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        type: 'ai',
        content: 'I understand your question. Let me help you with that! This is a simulated response demonstrating how the AI assistant would provide personalized guidance based on your specific needs. In a real implementation, this would connect to an AI service to provide contextual, helpful responses tailored to your journey as a P2L graduate.'
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 h-[calc(100vh-4rem)]"
    >
      <div className="mb-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-2 flex items-center"
        >
          AI-Powered Support
          <BrainCircuit className="w-8 h-8 text-cyan-500 ml-3 animate-pulse" />
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-dark-muted text-lg"
        >
          Your personal AI assistant for career guidance and support
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100%-120px)]">
        <div className="lg:col-span-2 flex flex-col">
          <Card hover={false} className="flex-1 flex flex-col">
            <div className="flex-1 p-6 overflow-y-auto">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-[80%] ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === 'ai' 
                            ? 'bg-gradient-to-br from-cyan-500 to-blue-500' 
                            : 'bg-gradient-to-br from-brand-primary to-brand-secondary'
                        }`}
                      >
                        {message.type === 'ai' ? (
                          <Bot className="w-6 h-6 text-white" />
                        ) : (
                          <span className="text-white font-bold">TU</span>
                        )}
                      </motion.div>
                      <div className={`p-4 rounded-2xl ${
                        message.type === 'ai' 
                          ? 'bg-dark-bg' 
                          : 'bg-gradient-to-br from-brand-primary to-brand-secondary text-white'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-2 text-dark-muted"
                >
                  <Bot className="w-5 h-5" />
                  <div className="flex space-x-1">
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-2 h-2 bg-dark-muted rounded-full"
                    />
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                      className="w-2 h-2 bg-dark-muted rounded-full"
                    />
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                      className="w-2 h-2 bg-dark-muted rounded-full"
                    />
                  </div>
                </motion.div>
              )}
            </div>
            
            <div className="border-t border-dark-border p-6">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about your career journey..."
                  className="flex-1 bg-dark-bg rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="p-3 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl text-white"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card glow>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                Quick Actions
                <Zap className="w-5 h-5 text-yellow-500 ml-2" />
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-dark-bg rounded-xl text-center hover:ring-2 hover:ring-brand-primary/30 transition-all"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs font-medium">{action.label}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4">AI Capabilities</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Sparkles className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Personalized Guidance</p>
                    <p className="text-xs text-dark-muted">Tailored advice for your journey</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Emotional Support</p>
                    <p className="text-xs text-dark-muted">Understanding and encouragement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Goal Tracking</p>
                    <p className="text-xs text-dark-muted">Help you achieve your dreams</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4">Usage Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-muted">Questions Asked</span>
                  <span className="text-sm font-bold">127</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-muted">Goals Set</span>
                  <span className="text-sm font-bold">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-muted">Insights Generated</span>
                  <span className="text-sm font-bold">45</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}