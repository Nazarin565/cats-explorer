import { Box } from '@mui/material';
import styled from 'styled-components';

export const StyledContentBox = styled(Box)(({ theme }) => ({
  '&&': {
    [theme.breakpoints.up('xs')]: {
      padding: 8,
    },

    [theme.breakpoints.up('md')]: {
      padding: 16,
    },

    [theme.breakpoints.up('lg')]: {
      padding: 24,
    },
  },
}));
