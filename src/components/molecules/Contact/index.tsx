import { format, parseISO } from 'date-fns';
import { FC } from 'react';
import { Contact as ContactData } from '../../../store/reducers/contactSlice';
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
  contact: ContactData;
}

export const Contact: FC<ContactProps> = ({ contact }) => {
  return (
    <Container>
      <Avatar alt="Avatar do contato" />
      <ContentWrapper>
        <Line>
          <Name>{contact.name}</Name>
          <Date>
            {format(parseISO(contact.createdAt.toString()), 'dd/MM HH:mm')}
          </Date>
        </Line>
        <Line>
          <MessageWrapper>
            <Message>{`~${contact.name}`}</Message>
          </MessageWrapper>
        </Line>
      </ContentWrapper>
    </Container>
  );
};
