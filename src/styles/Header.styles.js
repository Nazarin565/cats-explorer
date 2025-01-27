import styled from 'styled-components';
import PetsIcon from '@mui/icons-material/Pets';
import { Box, Typography } from '@mui/material';

export const PetsIconResponse = styled(PetsIcon)(({ theme, device }) => ({
  '&&': {
    marginRight: 8,

    [theme.breakpoints.up('md')]: {
      display: device === 'desktop' ? 'none' : 'flex',
    },

    [theme.breakpoints.down('md')]: {
      display: device === 'mobile' ? 'none' : 'flex',
    },
  },
}));

export const StyledTitle = styled(Typography)(({ theme, device }) => ({
  '&&': {
    marginRight: 16,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.2rem',

    [theme.breakpoints.up('md')]: {
      display: device === 'desktop' ? 'none' : 'flex',
    },

    [theme.breakpoints.down('md')]: {
      display: device === 'mobile' ? 'none' : 'flex',
      flexGrow: 1,
    },
  },
}));

export const StyledNavBox = styled(Box)(({ theme, device }) => ({
  '&&': {
    flexGrow: 1,

    [theme.breakpoints.up('md')]: {
      display: device === 'desktop' ? 'flex' : 'none',
    },

    [theme.breakpoints.down('md')]: {
      display: device === 'mobile' ? 'flex' : 'none',
    },
  },
}));
