import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  padding: 0 16px;
  background-color: inherit;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.background.hover};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  height: 100%;
  margin-left: 16px;
  padding-right: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};

  flex-wrap: wrap;
  min-width: 0;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Name = styled.p`
  font-size: 1.063rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const MessageWrapper = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.gray};
`;

export const Message = styled.p`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Date = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.gray};
`;
