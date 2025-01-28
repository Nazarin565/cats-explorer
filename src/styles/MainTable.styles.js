import { TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import styled from 'styled-components';

const StyledTableHeaderTitle = styled(TableHeaderRow.Title)`
  font-weight: 700;
`;

export const TableHeaderContent = ({ children, ...restProps }) => (
  <StyledTableHeaderTitle {...restProps}>{children}</StyledTableHeaderTitle>
);
