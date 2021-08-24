import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
    height: "100vh",
  },
}));

export default function App() {
  const [score, setScore] = useState(0);
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid justifyContent="Center">
        <Typography variant="h1">{score}</Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => setScore(score + 1)}
        >
          +
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setScore(0)}
        >
          Reset
        </Button>
      </Grid>
    </Container>
  );
}
