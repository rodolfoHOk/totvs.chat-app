import styled from 'styled-components';

export const Container = styled.div<{ author: boolean }>`
  display: flex;
  justify-content: ${({ author }) => (author ? 'flex-end' : 'flex-start')};
  margin-bottom: 12px;
`;

export const MessageItem = styled.div<{ author: boolean }>`
  background-color: ${({ author, theme }) =>
    author ? theme.colors.background.author : theme.colors.background.pure};
  border-radius: 10px;
  box-shadow: 0 1px 1px #ccc;
  display: flex;
  flex-direction: column;
  max-width: 90%;
  padding: 3px;
`;

export const TextWrapper = styled.div`
  margin: 4px 40px 4px 4px;
`;

export const Text = styled.p`
  font-size: 0.875rem;
  margin: 0;
`;

export const DateWrapper = styled.div`
  margin-right: 4px;
  text-align: right;
  height: 16px;
  margin-top: -16px;
`;

export const Date = styled.p`
  margin: 0;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text.gray};
`;
