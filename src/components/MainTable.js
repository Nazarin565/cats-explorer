import React from 'react';
import Paper from '@mui/material/Paper';
import {
  IntegratedPaging,
  IntegratedSorting,
  PagingState,
  SortingState,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  PagingPanel,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import { TableHeaderContent } from '../styles/MainTable.styles';

const columns = [
  { name: 'id', title: 'ID' },
  { name: 'product', title: 'Product' },
  { name: 'owner', title: 'Owner' },
];
const rows = [
  { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
  { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
];

export const MainTable = () => {
  // const [sorting, setSorting] = useState([
  //   { columnName: 'id', direction: 'asc' },
  // ]);

  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <PagingState defaultCurrentPage={1} pageSize={2} />
        <SortingState />
        <IntegratedPaging />
        <IntegratedSorting />
        <Table />
        <TableHeaderRow
          contentComponent={TableHeaderContent}
          showSortingControls
        />
        <PagingPanel />
      </Grid>
    </Paper>
  );
};
