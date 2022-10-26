import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ChatBody = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url(${({ theme }) => theme.background.image});
  flex: 1;
  overflow-y: auto;
  padding: 20px 30px;
`;
