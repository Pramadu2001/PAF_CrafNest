import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { createProgress } from '../../services/progressUpdateService';

const ProgressUpdateForm = ({ refreshList }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completedDate, setCompletedDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProgress({ title, description, completedDate });
      setTitle('');
      setDescription('');
      setCompletedDate('');
      refreshList();
    } catch (error) {
      console.error('Failed to create progress:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextField
        fullWidth
        label="Skill Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        fullWidth
        multiline
        rows={3}
        label="What did you learn?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <TextField
        fullWidth
        type="date"
        label="Completion Date"
        value={completedDate}
        onChange={(e) => setCompletedDate(e.target.value)}
        required
        InputLabelProps={{ shrink: true }}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          py: 1.5,
          backgroundColor: '#1976D2',
          '&:hover': { backgroundColor: '#1565C0' }
        }}
      >
        Add Progress Update
      </Button>
    </form>
  );
};

export default ProgressUpdateForm;