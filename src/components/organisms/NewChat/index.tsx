import { FC, useEffect } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import {
  Button,
  Container,
  Header,
  Item,
  List,
  Name,
  Title,
  TitleWrapper,
} from './styles';
import { useTheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  Contact,
  getContactsRequest,
  setActiveChatRequest,
} from '../../../store/reducers/contactSlice';
import { RootState } from '../../../store';
import { Avatar } from '../../atoms/Avatar';

interface NewChatProps {
  show: boolean;
  handleClose: () => void;
}

export const NewChat: FC<NewChatProps> = ({ show, handleClose }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contact.data);

  const handleNewChat = (contact: Contact) => {
    dispatch(setActiveChatRequest(contact));
    handleClose();
  };

  useEffect(() => {
    dispatch(getContactsRequest());
  }, []);

  return (
    <Container show={show}>
      <Header>
        <Button onClick={handleClose}>
          <ArrowBackRoundedIcon
            style={{ color: theme.colors.icon.secondary }}
          />
        </Button>
        <TitleWrapper>
          <Title>Nova conversa</Title>
        </TitleWrapper>
      </Header>
      <List>
        {contacts.map((contact) => (
          <Item key={contact.id} onClick={() => handleNewChat(contact)}>
            <Avatar alt="Avatar do contato" />
            <Name>{contact.name}</Name>
          </Item>
        ))}
      </List>
    </Container>
  );
};
