//cSpell:Ignore Seja, Início, Cabecalho, vindo, Compartilhar,  Saiba, mais
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles({
  root: {
    height: 500,
    width: '100%',
  },
  media: {
    height: 500,
    width: '100%',
    zIndex: 1,
    position: 'absolute'
  },
  skeleton:{
      zIndex:0,
      position: 'absolute'
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
      <>
    <Skeleton variant = "rect" width = '100%' height={500} animation="wave" className={classes.skeleton} />
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/featured/landscape"
          title="Seja bem Vindo!"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="outlined">
          Compartilhar
        </Button>
        <Button size="small" color="primary" variant="outlined">
          Saiba Mais
        </Button>
      </CardActions>
    </Card>
    </>
  );
}
