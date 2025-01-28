import React from 'react';
import { Grid2, List, ListItem, Typography } from '@mui/material';

import { StatElement } from '../styles/RowDetail.styles';
import { stats } from '../utils/constants';

const RowDetail = ({ row }) => (
  <Grid2 container spacing={2}>
    <Grid2
      flex={1}
      container
      flexDirection={'column'}
      justifyContent={'space-around'}
      alignItems={'center'}
      textAlign={'center'}
    >
      <Typography>{row.description}</Typography>
      <Grid2 container alignItems={'center'} border={1} p={1}>
        <Typography>
          <strong>Temperament:</strong>
        </Typography>
        <List>
          {row.temperament &&
            row.temperament
              .split(', ')
              .map((item) => <ListItem key={item}>{item}</ListItem>)}
        </List>
      </Grid2>
      <Typography>
        <strong>Alternative names:</strong>{' '}
        {row.alt_names ? row.alt_names : 'none'}
      </Typography>
    </Grid2>
    <Grid2 flex={1} alignSelf={'center'}>
      <img
        src={row.image.url}
        alt={row.name}
        width={'100%'}
        style={{ objectFit: 'contain' }}
      />
    </Grid2>
    <Grid2
      flex={1}
      display={'grid'}
      gridTemplateRows={'repeat(9, auto)'}
      gridTemplateColumns={'repeat(2, auto)'}
      gap={1}
    >
      {stats.map((stat) => (
        <StatElement key={stat}>
          {stat.replace('_', ' ')}: <strong>{row[stat]}</strong>
        </StatElement>
      ))}
    </Grid2>
  </Grid2>
);

export default RowDetail;
