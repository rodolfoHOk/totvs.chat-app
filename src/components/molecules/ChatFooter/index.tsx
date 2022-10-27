import { FC, useEffect } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SentimentVerySatisfiedRoundedIcon from '@mui/icons-material/SentimentVerySatisfiedRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {
  Container,
  Button,
  ButtonsWrapper,
  InputWrapper,
  Input,
} from './styles';
import { useTheme } from 'styled-components';
interface ChatFooterProps {
  show: boolean;
  text: string;
  handleText: (text: string) => void;
  handleSend: () => void;
  handleShowEmoji: () => void;
  handleCloseEmoji: () => void;
}

export const ChatFooter: FC<ChatFooterProps> = ({
  show,
  text,
  handleText,
  handleSend,
  handleShowEmoji,
  handleCloseEmoji,
}) => {
  const theme = useTheme();

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        e.preventDefault();
        handleSend();
      }
    };

    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [text]);

  return (
    <Container>
      <ButtonsWrapper>
        <Button show={show} onClick={handleCloseEmoji}>
          <CloseRoundedIcon />
        </Button>
        <Button show onClick={handleShowEmoji}>
          <SentimentVerySatisfiedRoundedIcon
            style={{ color: show ? theme.colors.icon.green : '' }}
          />
        </Button>
      </ButtonsWrapper>
      <InputWrapper>
        <Input
          type="text"
          placeholder="Mensagem"
          value={text}
          onChange={(e) => handleText(e.target.value)}
        />
      </InputWrapper>
      <Button show onClick={handleSend}>
        <SendRoundedIcon />
      </Button>
    </Container>
  );
};
