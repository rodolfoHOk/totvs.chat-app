import { FC } from 'react';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import { Avatar } from '../../atoms/Avatar';
import {
  ButtonsWrapper,
  Container,
  IconWrapper,
  AvatarWrapper,
  Name,
} from './styles';

interface HeaderProps {
  handleShow?: () => void;
  showButton?: boolean;
  name?: string;
}

export const Header: FC<HeaderProps> = ({
  handleShow,
  showButton = true,
  name = '',
}) => {
  return (
    <Container>
      {name !== '' ? (
        <AvatarWrapper>
          <Avatar alt="Avatar do usuário" />
          <Name>{name}</Name>
        </AvatarWrapper>
      ) : (
        <Avatar alt="Avatar do usuário" />
      )}
      {showButton && (
        <ButtonsWrapper>
          <IconWrapper onClick={handleShow}>
            <ChatRoundedIcon />
          </IconWrapper>
        </ButtonsWrapper>
      )}
    </Container>
  );
};
