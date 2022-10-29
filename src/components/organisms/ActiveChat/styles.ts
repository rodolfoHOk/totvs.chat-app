import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ChatBody = styled.div`
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.background.chat};
  background-image: url(${({ theme }) => theme.background.image});
  flex: 1;
  overflow-y: auto;
  padding: 20px 30px;
`;

export const EmojiWrapper = styled.div<{ open: boolean }>`
  height: ${({ open }) => (open ? '450px' : '0')};
  overflow-y: hidden;
  transition: all ease 0.3s;
`;
