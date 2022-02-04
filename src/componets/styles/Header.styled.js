import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }

  //   h1 {
  //     color: red;
  //   }
  //   &:hover {
  //     background-color: black;
  //   }
`;
