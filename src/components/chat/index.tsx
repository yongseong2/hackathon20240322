import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MessageModel } from '../ui-kit-react/src/components/Message';
import {
  Avatar,
  ChatContainer,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
  TypingIndicator
} from '../ui-kit-react/src/components';
import { MessageType } from '../ui-kit-react/src/types';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../api/axiosInstance/constants';

interface ProductProps {
  title: string;
  description: string;
  price: number;
  link: string;
}

const Product: React.FC<ProductProps> = ({
  title,
  description,
  price,
  link
}) => {
  return (
    <Link to={link}>
      <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
        <p className="flex-none text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </p>
        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
          <p className="text-lg font-semibold tracking-tight text-gray-900">
            {price.toLocaleString()} 원
          </p>
          <p className="mt-2 text-base leading-7 text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const ChatBotPage = () => {
  const [messages, setMessages] = useState<MessageModel[]>([
    {
      message: '나에게 맞는 보험이 어떤건지 물어보세요...',
      sentTime: 'just now',
      sender: 'ChatGPT',
      direction: 'incoming', // 'incoming' 또는 'outgoing'
      position: 'single'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async (message: string) => {
    const newMessage: MessageModel = {
      message,
      sentTime: new Date().toISOString(),
      sender: 'user',
      direction: 'outgoing',
      position: 'single'
    };

    setMessages((prevMessages: MessageModel[]) => [
      ...prevMessages,
      newMessage
    ]);
    setIsTyping(true);

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await processMessageToChatGPT(newMessage);

      const content = response.data;
      const type: MessageType = response.type;

      if (content) {
        const chatGPTResponse: MessageModel = {
          message: content,
          sentTime: new Date().toISOString(),
          sender: 'ChatGPT',
          direction: 'incoming',
          position: 'single',
          type: type
        };
        setMessages(prevMessages => [...prevMessages, chatGPTResponse]);
      }
    } catch (error) {
      console.error('Error processing message:', error);
    } finally {
      setIsTyping(false);
    }
  };

  async function processMessageToChatGPT(chatMessages: MessageModel) {
    const response = await fetch(
      `${baseUrl}/ai/search?query=${chatMessages.message}`,
      {
        method: 'GET'
      }
    );
    return response.json();
  }

  return (
    <MainContainer className="rounded-[10px]">
      <ChatContainer className="p-2">
        <MessageList
          scrollBehavior="auto"
          autoScrollToBottom={true}
          autoScrollToBottomOnMount={true}
          typingIndicator={
            isTyping ? <TypingIndicator content="AI가 답변중입니다..." /> : null
          }
        >
          {messages.map((message, i) => {
            return message.type === 'custom' ? (
              <Message.CustomContent key={i}>
                <Avatar name="Emily" src={'bot.svg'} />
                <Product
                  title={'타이틀'}
                  description={'설명'}
                  price={3000}
                  link={''}
                />
              </Message.CustomContent>
            ) : (
              <Message key={i} model={message}>
                {message.sender === 'ChatGPT' && (
                  <Avatar name="Emily" src={'bot.svg'} />
                )}
              </Message>
            );
          })}
        </MessageList>
        <MessageInput
          className="p-2"
          placeholder="메시지를 입력하세요"
          attachButton={false}
          onSend={handleSendRequest}
        />
      </ChatContainer>
    </MainContainer>
  );
};

export default ChatBotPage;
