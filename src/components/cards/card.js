import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import HoverRating from "./star";
import { Grid, Rating } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <div style={{ padding: "30px" }}>
      <Grid container spacing={2}>
        {/* {movieData &&
      movieData.map((movie, index) =>(
        ))
      } */}
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            {/* <Link to={`/movie/${movie.id}`}> */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://www.legendary.com/wp-content/uploads/2021/10/dune-trailer.jpg"
                alt="Dune"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  DUNE
                </Typography>
                <Typography component="legend">IMDB</Typography>
                <Rating name="read-only" value={4.5} readOnly />
                <Typography component="legend">Rooten tamatoes</Typography>
                <Rating name="read-only" value={4} readOnly />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://www.legendary.com/wp-content/uploads/2021/10/dune-trailer.jpg"
                alt="Dune"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  DUNE
                </Typography>
                <Typography component="legend">IMDB</Typography>
                <Rating name="read-only" value={4.5} readOnly />
                <Typography component="legend">Rooten tamatoes</Typography>
                <Rating name="read-only" value={4} readOnly />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://www.legendary.com/wp-content/uploads/2021/10/dune-trailer.jpg"
                alt="Dune"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  DUNE
                </Typography>
                <Typography component="legend">IMDB</Typography>
                <Rating name="read-only" value={4.5} readOnly />
                <Typography component="legend">Rooten tamatoes</Typography>
                <Rating name="read-only" value={4} readOnly />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://www.legendary.com/wp-content/uploads/2021/10/dune-trailer.jpg"
                alt="Dune"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  DUNE
                </Typography>
                <Typography component="legend">IMDB</Typography>
                <Rating name="read-only" value={4.5} readOnly />
                <Typography component="legend">Rooten tamatoes</Typography>
                <Rating name="read-only" value={4} readOnly />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://www.legendary.com/wp-content/uploads/2021/10/dune-trailer.jpg"
                alt="Dune"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  DUNE
                </Typography>
                <Typography component="legend">IMDB</Typography>
                <Rating name="read-only" value={4.5} readOnly />
                <Typography component="legend">Rooten tamatoes</Typography>
                <Rating name="read-only" value={4} readOnly />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://www.legendary.com/wp-content/uploads/2021/10/dune-trailer.jpg"
                alt="Dune"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  DUNE
                </Typography>
                <Typography component="legend">IMDB</Typography>
                <Rating name="read-only" value={4.5} readOnly />
                <Typography component="legend">Rooten tamatoes</Typography>
                <Rating name="read-only" value={4} readOnly />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
