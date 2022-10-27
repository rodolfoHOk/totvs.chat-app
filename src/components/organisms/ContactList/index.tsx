import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import {
  Contact as ContactData,
  setActiveChatRequest,
} from '../../../store/reducers/contactSlice';
import { getActiveChatsRequest } from '../../../store/reducers/userSlice';
import { Contact } from '../../molecules/Contact';
import { Container } from './styles';

export const ContactList: FC = () => {
  const dispatch = useDispatch();
  const { activeChats, id } = useSelector((state: RootState) => state.user);

  const handleContactClick = (contact: ContactData) => {
    if (id) dispatch(dispatch(setActiveChatRequest(contact)));
  };

  useEffect(() => {
    if (id) dispatch(getActiveChatsRequest({ id }));
  }, []);

  return (
    <Container>
      {activeChats.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleContactClick={handleContactClick}
        />
      ))}
    </Container>
  );
};
