import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socketIoClient from 'socket.io-client';
import { RootState } from '../../../store';
import {
  getMessagesRequest,
  sendMessageRequest,
} from '../../../store/reducers/messageSlice';
import { Message } from '../../atoms/Message';
import { ChatFooter } from '../../molecules/ChatFooter';
import { Header } from '../../molecules/Header';
import { ChatBody, Container, EmojiWrapper } from './styles';

export const ActiveChat: FC = () => {
  const dispatch = useDispatch();
  const { activeContact } = useSelector((state: RootState) => state.contact);
  const { id } = useSelector((state: RootState) => state.user);
  const messages = useSelector((state: RootState) => state.message.data);

  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    dispatch(
      sendMessageRequest({
        content: message,
        originId: id,
        destinationId: activeContact!.id,
      })
    );
    setMessage('');
  };

  const handleEmojiClick = (e: EmojiClickData) => {
    setMessage(message + e.emoji);
  };

  useEffect(() => {
    dispatch(
      getMessagesRequest({ userLoginId: id, userContactId: activeContact!.id })
    );

    const socket = socketIoClient('http://localhost:3333');

    socket.on('new_message', () =>
      dispatch(
        getMessagesRequest({
          userLoginId: id,
          userContactId: activeContact!.id,
        })
      )
    );
  }, [activeContact]);

  return (
    <Container>
      <Header showButton={false} name={activeContact?.name} />
      <ChatBody>
        {messages.map((message) => (
          <Message key={message.id} message={message} userId={id} />
        ))}
      </ChatBody>
      <EmojiWrapper open={showEmoji}>
        <EmojiPicker
          width="100%"
          previewConfig={{ showPreview: false }}
          onEmojiClick={handleEmojiClick}
        />
      </EmojiWrapper>
      <ChatFooter
        show={showEmoji}
        text={message}
        handleText={(text) => setMessage(text)}
        handleSend={() => handleSend()}
        handleShowEmoji={() => setShowEmoji(true)}
        handleCloseEmoji={() => setShowEmoji(false)}
      />
    </Container>
  );
};
