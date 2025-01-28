import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  Rating,
  TextField,
} from '@mui/material';

const AddToFavouriteForm = ({
  isFormOpened,
  onCloseForm,
  currentCat,
  onSuccessResult,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    description: '',
  });

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleString();
    const prev = JSON.parse(localStorage.getItem('savedCats')) || [];
    const newArr = [{ ...currentCat, ...formData, date }, ...prev];
    localStorage.setItem('savedCats', JSON.stringify(newArr));
    onCloseForm();

    setFormData({
      name: '',
      rating: 0,
      description: '',
    });

    onSuccessResult();
  };

  return (
    <Dialog open={isFormOpened} onClose={onCloseForm} maxWidth="sm" fullWidth>
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
            onChange={handleChangeFormData}
            required
          />

          <Grid2 container alignItems={'center'}>
            <label>Rating:</label>
            <Rating
              name="rating"
              precision={1}
              max={5}
              value={formData.rating}
              onChange={handleChangeFormData}
              required
            />
          </Grid2>

          <TextField
            fullWidth
            margin="normal"
            label="Feedback"
            name="description"
            value={formData.feedback}
            onChange={handleChangeFormData}
            multiline
            rows={4}
            placeholder="Write your feedback here..."
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={onCloseForm} color="secondary">
            Cancel
          </Button>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddToFavouriteForm;
