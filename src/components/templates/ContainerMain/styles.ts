import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  height: 100vh;
`;
