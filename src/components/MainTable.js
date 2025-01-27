import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  IntegratedPaging,
  IntegratedSorting,
  PagingState,
  RowDetailState,
  SortingState,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  PagingPanel,
  Table,
  TableHeaderRow,
  TableRowDetail,
} from '@devexpress/dx-react-grid-material-ui';
import { Typography } from '@mui/material';

import RowDetail from './RowDetail';

import { TableHeaderContent } from '../styles/MainTable.styles';
import { columns } from '../utils/constants';
import { getCats } from '../api/cats';

const MainTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getCats().then((data) => {
      const cats = data.map((cat, index) => ({
        ...cat,
        id: index + 1,
        name: cat.name,
        country_code: cat.country_code,
        weight: cat.weight.metric,
        adaptability: cat.adaptability,
        energy_level: cat.energy_level,
        life_span: cat.life_span,
      }));

      setRows(cats);
    });
  }, []);

  return (
    <>
      <Typography variant="h3" textAlign={'center'}>
        Cat's explorer
      </Typography>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <PagingState defaultCurrentPage={1} defaultPageSizepageSize={10} />
          <SortingState />
          <RowDetailState />

          <IntegratedPaging />
          <IntegratedSorting />

          <Table />
          <TableHeaderRow
            contentComponent={TableHeaderContent}
            showSortingControls
          />
          <TableRowDetail contentComponent={RowDetail} />

          <PagingPanel pageSizes={[5, 10, 15, 0]} />
        </Grid>
      </Paper>
    </>
  );
};

export default MainTable;
