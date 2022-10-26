import { FC } from 'react';
import {
  Container,
  Date,
  DateWrapper,
  MessageItem,
  Text,
  TextWrapper,
} from './styles';

interface Data {
  content: string;
  date: string;
}

interface MessageProps {
  data: Data;
  author?: boolean;
}

export const Message: FC<MessageProps> = ({ data, author = false }) => {
  return (
    <Container author={author}>
      <MessageItem author={author}>
        <TextWrapper>
          <Text>{data.content}</Text>
        </TextWrapper>
        <DateWrapper>
          <Date>{data.date}</Date>
        </DateWrapper>
      </MessageItem>
    </Container>
  );
};
