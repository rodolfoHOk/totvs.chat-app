import { FC } from 'react';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import { Avatar } from '../../atoms/Avatar';
import { ButtonsWrapper, Container, IconWrapper } from './styles';

interface HeaderProps {
  handleShow: () => void;
}

export const Header: FC<HeaderProps> = ({ handleShow }) => {
  return (
    <Container>
      <Avatar alt="Avatar do usuário" />
      <ButtonsWrapper>
        <IconWrapper onClick={handleShow}>
          <ChatRoundedIcon />
        </IconWrapper>
      </ButtonsWrapper>
    </Container>
  );
};
