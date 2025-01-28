import React, { useState } from 'react';
import { Box, Button, Grid2, Typography } from '@mui/material';

import Loader from './Loader';
import AddToFavouriteForm from './AddToFavouriteForm';

import { getRandomCatImage } from '../api/cats';
import { initialAddedResult } from '../utils/constants';

const Random = () => {
  const [currentCat, setCurrentCat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saveButton, setSaveButton] = useState(false);
  const [isFormOpened, setIsFormOpened] = useState(false);
  const [addedResult, setAddedResult] = useState(initialAddedResult);

  const handleSuccessResult = () => {
    setAddedResult({ ...addedResult, success: true });
  };

  const handleGetImage = () => {
    setCurrentCat(null);
    setLoading(true);
    setSaveButton(false);
    setAddedResult(initialAddedResult);

    getRandomCatImage()
      .then((data) => {
        setCurrentCat(...data);
        setSaveButton(true);
      })
      .catch((error) =>
        setAddedResult({ ...addedResult, error: error.message })
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseForm = () => {
    setIsFormOpened(false);
  };

  return (
    <Grid2
      container
      direction={'column'}
      alignItems={'center'}
      gap={4}
      textAlign={'center'}
      minWidth={'665px'}
    >
      <Typography variant="h3">Random cats!</Typography>
      <Typography>
        Press the button and decide to save this picture or skip them!
      </Typography>
      <Grid2 container spacing={4}>
        <Button variant="contained" onClick={handleGetImage} loading={loading}>
          Let's go
        </Button>
        <Button
          variant="contained"
          onClick={() => setIsFormOpened(true)}
          disabled={!saveButton || addedResult.success}
        >
          Save this pic
        </Button>
      </Grid2>
      <Box width={'80%'}>{!currentCat && loading && <Loader />}</Box>
      <Box>
        {currentCat && currentCat.url && (
          <img src={currentCat.url} alt="random cat" width={'80%'} />
        )}
      </Box>

      <AddToFavouriteForm
        isFormOpened={isFormOpened}
        onCloseForm={handleCloseForm}
        currentCat={currentCat}
        onSuccessResult={handleSuccessResult}
      />

      {addedResult.success && (
        <Typography variant="body2" color="green">
          Successfully added to favourites
        </Typography>
      )}

      {addedResult.error && (
        <Typography variant="body2" color="red">
          Error: {addedResult.error}
        </Typography>
      )}
    </Grid2>
  );
};

export default Random;
