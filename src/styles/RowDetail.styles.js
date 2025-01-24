import { Typography } from '@mui/material';
import styled from 'styled-components';

export const StatElement = styled(Typography)`
  text-align: center;

  &::first-letter {
    text-transform: uppercase;
  }
`;
