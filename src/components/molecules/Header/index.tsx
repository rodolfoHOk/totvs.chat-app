import { FC } from 'react';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
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
  avatarUrl?: string;
  theme?: 'dark' | 'light';
  handleChangeTheme?: () => void;
}

export const Header: FC<HeaderProps> = ({
  handleShow,
  showButton = true,
  name = '',
  avatarUrl = '',
  theme = 'light',
  handleChangeTheme,
}) => {
  return (
    <Container>
      {name !== '' ? (
        <AvatarWrapper>
          <Avatar url={avatarUrl} alt="Avatar do usuário" />
          <Name>{name}</Name>
        </AvatarWrapper>
      ) : (
        <Avatar url={''} alt="Avatar do usuário" />
      )}
      {showButton && (
        <ButtonsWrapper>
          <IconWrapper onClick={handleChangeTheme}>
            {theme === 'light' ? (
              <DarkModeRoundedIcon />
            ) : (
              <LightModeRoundedIcon />
            )}
          </IconWrapper>
          <IconWrapper onClick={handleShow}>
            <ChatRoundedIcon />
          </IconWrapper>
        </ButtonsWrapper>
      )}
    </Container>
  );
};
