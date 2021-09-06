import styled, { css } from 'styled-components';

const DashboardContainer = styled.section`
  ${({ theme }) => theme.devices.tablet} {
    padding: ${({ theme }) => theme.spacing.sm};
  }

  padding: ${({ theme }) =>
    css`
      ${theme.spacing.md} ${theme.spacing.xl}
    `};
`;

export default DashboardContainer;
