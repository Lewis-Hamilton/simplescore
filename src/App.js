import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import RefreshIcon from "@material-ui/icons/Refresh";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
    height: "100vh",
  },
  text: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textShadow: "5px 5px 20px black",
  },
  grid: {
    position: "absolute",
    top: "80%",
    justifyContent: "center",
  },
  reset: {
    marginLeft: "10vw",
    marginRight: "10vw",
    color: "black",
    background: "linear-gradient(45deg, #af0000 30%, #ef8700 90%)",
    height: 60,
    width: 100,
  },
  add: {
    marginLeft: "10vw",
    marginRight: "10vw",
    color: "black",
    background: "linear-gradient(45deg, #00a900 30%, #006453 90%)",
    height: 60,
    width: 100,
  },
}));

export default function App() {
  const [score, setScore] = useState(0);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.text} variant="h1">
        {score}
      </Typography>
      <Grid container direction="row" className={classes.grid}>
        <Grid item>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            onClick={() => setScore(0)}
            className={classes.reset}
          >
            <RefreshIcon />
          </Button>
        </Grid>
        <Grid item>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => setScore(score + 1)}
            className={classes.add}
          >
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
