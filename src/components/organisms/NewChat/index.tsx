import { FC } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Button, Container, Header, Title, TitleWrapper } from './styles';
import { useTheme } from 'styled-components';

interface NewChatProps {
  show: boolean;
  handleClose: () => void;
}

export const NewChat: FC<NewChatProps> = ({ show, handleClose }) => {
  const theme = useTheme();

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
    </Container>
  );
};
