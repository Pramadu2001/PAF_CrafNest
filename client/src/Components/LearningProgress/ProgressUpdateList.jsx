import React, { useEffect, useState } from 'react';
import { 
  getAllProgress, 
  deleteProgress, 
  updateProgress 
} from '../../services/progressUpdateService';
import { 
  List, 
  ListItem, 
  IconButton, 
  Typography, 
  Button,
  TextField,
  Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ProgressUpdateList = () => {
  const [updates, setUpdates] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const loadUpdates = async () => {
    try {
      const response = await getAllProgress();
      setUpdates(response.data);
    } catch (error) {
      console.error('Failed to load updates:', error);
    }
  };

  useEffect(() => {
    loadUpdates();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this update?')) {
      try {
        await deleteProgress(id);
        loadUpdates();
      } catch (error) {
        console.error('Failed to delete:', error);
      }
    }
  };

  const handleEdit = (update) => {
    setEditId(update.id);
    setEditData(update);
  };

  const handleUpdate = async () => {
    try {
      await updateProgress(editId, editData);
      setEditId(null);
      loadUpdates();
    } catch (error) {
      console.error('Failed to update:', error);
    }
  };

  return (
    <List className="divide-y">
      {updates.map((update) => (
        <ListItem
          key={update.id}
          className="p-4"
          secondaryAction={
            <Box>
              <IconButton onClick={() => handleEdit(update)} color="primary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(update.id)} color="error">
                <DeleteIcon />
              </IconButton>
            </Box>
          }
        >
          {editId === update.id ? (
            <Box className="w-full space-y-3">
              <TextField
                fullWidth
                label="Title"
                value={editData.title}
                onChange={(e) => setEditData({...editData, title: e.target.value})}
              />
              <TextField
                fullWidth
                multiline
                label="Description"
                value={editData.description}
                onChange={(e) => setEditData({...editData, description: e.target.value})}
              />
              <TextField
                type="date"
                fullWidth
                label="Completion Date"
                value={editData.completedDate?.split('T')[0]}
                onChange={(e) => setEditData({...editData, completedDate: e.target.value})}
                InputLabelProps={{ shrink: true }}
              />
              <Box className="flex gap-2">
                <Button onClick={handleUpdate} variant="contained" color="primary">
                  Save
                </Button>
                <Button onClick={() => setEditId(null)} variant="outlined">
                  Cancel
                </Button>
              </Box>
            </Box>
          ) : (
            <Box>
              <Typography variant="h6">{update.title}</Typography>
              <Typography variant="body1" className="text-gray-600">
                {update.description}
              </Typography>
              <Typography variant="caption" className="text-gray-500">
                Completed: {new Date(update.completedDate).toLocaleDateString()}
              </Typography>
            </Box>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default ProgressUpdateList;