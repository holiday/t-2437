
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const FloatingChatIcon = () => {
  const handleChatClick = () => {
    // For now, just log to console - could integrate with actual chat service
    console.log('Chat support clicked');
    // Could integrate with services like Intercom, Zendesk Chat, etc.
  };

  return (
    <Button
      onClick={handleChatClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-orange hover:bg-orange-dark shadow-lg z-50 animate-pulse"
      size="icon"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </Button>
  );
};

export default FloatingChatIcon;
