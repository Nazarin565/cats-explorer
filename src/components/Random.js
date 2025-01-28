import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  Rating,
  TextField,
  Typography,
} from '@mui/material';

import Loader from './Loader';

import { getRandomCatImage } from '../api/cats';

const Random = () => {
  const [currentCat, setCurrentCat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saveButton, setSaveButton] = useState(false);
  const [isFormOpened, setIsFormOpened] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    description: '',
  });

  const handleGetImage = () => {
    setCurrentCat(null);
    setLoading(true);
    setSaveButton(false);

    getRandomCatImage()
      .then((data) => setCurrentCat(...data))
      .finally(() => {
        setLoading(false);
        setSaveButton(true);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleString();
    const prev = JSON.parse(localStorage.getItem('savedCats')) || [];
    const newArr = [{ ...currentCat, ...formData, date }, ...prev];
    localStorage.setItem('savedCats', JSON.stringify(newArr));
    setIsFormOpened(false);

    setFormData({
      name: '',
      rating: 0,
      description: '',
    });
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
          disabled={!saveButton}
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

      <Dialog
        open={isFormOpened}
        onClose={() => setIsFormOpened(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle textAlign={'center'}>
          Enter details about this foto
        </DialogTitle>

        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              fullWidth
              margin="normal"
              label="Picture name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Grid2 container alignItems={'center'}>
              <label>Rating:</label>
              <Rating
                name="rating"
                precision={1}
                max={5}
                value={formData.rating}
                onChange={handleChange}
                required
              />
            </Grid2>

            <TextField
              fullWidth
              margin="normal"
              label="Feedback"
              name="description"
              value={formData.feedback}
              onChange={handleChange}
              multiline
              rows={4}
              placeholder="Write your feedback here..."
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={() => setIsFormOpened(false)} color="secondary">
              Cancel
            </Button>

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Grid2>
  );
};

export default Random;
