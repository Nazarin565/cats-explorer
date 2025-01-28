import React, { useState } from 'react';
import {
  DragDropProvider,
  Grid,
  Table,
  TableColumnReordering,
  TableEditColumn,
  TableEditRow,
  TableHeaderRow,
  TableRowDetail,
} from '@devexpress/dx-react-grid-material-ui';
import { EditingState, RowDetailState } from '@devexpress/dx-react-grid';
import { Paper, Typography } from '@mui/material';

import RowImage from './RowImage';

import { createUniqueId } from '../utils/helpers';
import {
  defaultFavouriteColumnsOrder,
  favouriteTableColumns,
} from '../utils/constants';

const FavouritesTable = () => {
  const [rows, setRows] = useState(
    JSON.parse(localStorage.getItem('savedCats')) || []
  );

  const [editingColumnExtensions] = useState([
    {
      columnName: 'id',
      editingEnabled: false,
    },
    {
      columnName: 'name',
      createRowChange: (row, value) => ({
        ...row,
        name: value,
      }),
    },
    {
      columnName: 'rating',
      createRowChange: (row, value) => ({ ...row, rating: value }),
    },
    {
      columnName: 'description',
      createRowChange: (row, value) => ({ ...row, description: value }),
    },
    {
      columnName: 'url',
      createRowChange: (row, value) => ({ ...row, url: value }),
    },
    {
      columnName: 'date',
      editingEnabled: false,
    },
  ]);
  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const newId = createUniqueId();
      const date = new Date().toLocaleString();
      changedRows = [
        ...added.map((row) => ({
          id: newId,
          date,
          ...row,
        })),
        ...rows,
      ];
    }
    if (changed) {
      changedRows = rows.map((row, index) => {
        return changed[index] && changed[index].id === row.id
          ? { ...row, ...changed[index] }
          : row;
      });
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter((_, index) => !deletedSet.has(index));
    }
    setRows(changedRows);
    localStorage.setItem('savedCats', JSON.stringify(changedRows));
  };

  return (
    <>
      <Typography variant="h3" textAlign={'center'}>
        Favourite pictures
      </Typography>
      <Paper>
        <Grid columns={favouriteTableColumns} rows={rows}>
          <RowDetailState />
          <EditingState
            columnExtensions={editingColumnExtensions}
            onCommitChanges={commitChanges}
          />

          <DragDropProvider />

          <Table />
          <TableHeaderRow />
          <TableRowDetail contentComponent={RowImage} />
          <TableEditRow />
          <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
          <TableColumnReordering defaultOrder={defaultFavouriteColumnsOrder} />
        </Grid>
      </Paper>
    </>
  );
};

export default FavouritesTable;
