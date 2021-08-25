import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
    height: "100vh",
  },
  text: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  grid: {
    position: "absolute",
    top: "90%",
    left: "50%",
    transform: "translatex(-50%)",
  },
  button: {
    marginLeft: "10vw",
    marginRight: "10vw",
  },
}));

export default function App() {
  const [score, setScore] = useState(0);
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography className={classes.text} variant="h1">
        {score}
      </Typography>
      <Grid container direction="row" className={classes.grid}>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setScore(0)}
            className={classes.button}
          >
            Reset
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setScore(score + 1)}
            className={classes.button}
          >
            +
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
