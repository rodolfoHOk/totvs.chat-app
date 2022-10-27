import { format, parseISO } from 'date-fns';
import { FC } from 'react';
import { Message as MessageData } from '../../../store/reducers/messageSlice';
import {
  Container,
  Date,
  DateWrapper,
  MessageItem,
  Text,
  TextWrapper,
} from './styles';

interface MessageProps {
  message: MessageData;
  userId: string;
}

export const Message: FC<MessageProps> = ({ message, userId }) => {
  return (
    <Container author={userId === message.origin.id}>
      <MessageItem author={userId === message.origin.id}>
        <TextWrapper>
          <Text>{message.content}</Text>
        </TextWrapper>
        <DateWrapper>
          <Date>{format(parseISO(message.createdAt.toString()), 'HH:mm')}</Date>
        </DateWrapper>
      </MessageItem>
    </Container>
  );
};
