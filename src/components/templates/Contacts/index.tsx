import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Header } from '../../molecules/Header';
import { SearchBar } from '../../molecules/SearchBar';
import { ContactList } from '../../organisms/ContactList';
import { NewChat } from '../../organisms/NewChat';
import { Container } from './styles';

export const Contacts: FC = () => {
  const [show, setShow] = useState(false);
  const { name } = useSelector((state: RootState) => state.user);

  return (
    <Container>
      <NewChat show={show} handleClose={() => setShow(false)} />
      <Header handleShow={() => setShow(true)} name={name} />
      <SearchBar />
      <ContactList />
    </Container>
  );
};
