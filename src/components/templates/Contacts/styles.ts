import styled from 'styled-components';

export const Container = styled.aside`
  border-right: 1px solid ${({ theme }) => theme.colors.border.primary};
  display: flex;
  flex-direction: column;
  max-width: 415px;
  width: 35%;
`;
