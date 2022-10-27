import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { getActiveChatsRequest } from '../../../store/reducers/userSlice';
import { Contact } from '../../molecules/Contact';
import { Container } from './styles';

export const ContactList: FC = () => {
  const dispatch = useDispatch();
  const { activeChats, id } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getActiveChatsRequest({ id }));
  }, []);

  return (
    <Container>
      {activeChats.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </Container>
  );
};
