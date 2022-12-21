import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  btn:{
    fontSize:60,
    backgroundColor: 'voilet'
  }
})

export default function Create() {
  const classes = useStyles()

  return (
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button 
        className={classes.btn}
        onClick={() => console.log("You clicked me.")}
        type='submit'
        color='secondary'
        variant='contained'
        disableElevation
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>

    </Container>
  )
}
