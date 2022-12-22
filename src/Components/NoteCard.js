import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { DeleteOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';

const NoteCard = ({note, handleDelete}) => {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader 
            action={
                <IconButton onClick={() => handleDelete(note.id)}>
                  <DeleteOutlined />
                </IconButton>
            }
            title={note.title}
            subheader={note.category}
        />
        <CardContent>
            <Typography variant='body2' color='textSecondary'>
                {note.details}
            </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default NoteCard
