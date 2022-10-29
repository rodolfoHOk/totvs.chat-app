import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { changeTheme } from '../../../store/reducers/themeSlice';
import { Header } from '../../molecules/Header';
import { SearchBar } from '../../molecules/SearchBar';
import { ContactList } from '../../organisms/ContactList';
import { NewChat } from '../../organisms/NewChat';
import { Container } from './styles';

export const Contacts: FC = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);
  const { name } = useSelector((state: RootState) => state.user);
  const [show, setShow] = useState(false);

  const handleChangeTheme = () => dispatch(changeTheme());

  return (
    <Container>
      <NewChat show={show} handleClose={() => setShow(false)} />
      <Header
        handleShow={() => setShow(true)}
        name={name}
        theme={theme === 'light' ? 'light' : 'dark'}
        handleChangeTheme={handleChangeTheme}
      />
      <SearchBar />
      <ContactList />
    </Container>
  );
};
