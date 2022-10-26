import { FC, useState } from 'react';
import { Header } from '../../molecules/Header';
import { SearchBar } from '../../molecules/SearchBar';
import { ContactList } from '../../organisms/ContactList';
import { NewChat } from '../../organisms/NewChat';
import { Container } from './styles';

export const Contacts: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <NewChat show={show} handleClose={() => setShow(false)} />
      <Header handleShow={() => setShow(true)} />
      <SearchBar />
      <ContactList />
    </Container>
  );
};
