import { FC } from 'react';
import { Avatar } from '../../atoms/Avatar';
import {
  Container,
  ContentWrapper,
  Date,
  Line,
  Message,
  MessageWrapper,
  Name,
} from './styles';

interface ContactProps {
  name: string;
}

export const Contact: FC<ContactProps> = ({ name }) => {
  return (
    <Container>
      <Avatar alt="Avatar do contato" />
      <ContentWrapper>
        <Line>
          <Name>{name}</Name>
          <Date>19:00</Date>
        </Line>
        <Line>
          <MessageWrapper>
            <Message>Não irei usar Lorem Ipsum</Message>
          </MessageWrapper>
        </Line>
      </ContentWrapper>
    </Container>
  );
};
