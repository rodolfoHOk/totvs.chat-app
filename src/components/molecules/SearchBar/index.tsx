import { FC } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Container, Input, InputWrapper } from './styles';

export const SearchBar: FC = () => {
  return (
    <Container>
      <InputWrapper>
        <SearchRoundedIcon />
        <Input type="search" placeholder="Pesquisar ou começar uma conversa" />
      </InputWrapper>
    </Container>
  );
};
