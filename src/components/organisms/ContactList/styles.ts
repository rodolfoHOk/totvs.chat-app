import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.pure};
  overflow-y: auto;
`;
