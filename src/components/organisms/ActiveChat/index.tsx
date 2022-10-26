import { FC } from 'react';
import { Message } from '../../atoms/Message';
import { ChatFooter } from '../../molecules/ChatFooter';
import { Header } from '../../molecules/Header';
import { ChatBody, Container } from './styles';

export const ActiveChat: FC = () => {
  return (
    <Container>
      <Header showButton={false} name={'Contato 18'} />
      <ChatBody>
        <Message
          data={{ content: 'Isso aqui é Elite', date: '19:00' }}
          author
        />
        <Message data={{ content: 'Isso aqui é Elite', date: '19:00' }} />
      </ChatBody>
      <ChatFooter />
    </Container>
  );
};
