import React, { Component } from "react";
import PropTypes from "prop-types";
import { Backdrop, Button, Grid, Typography } from "@mui/material";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "", errorInfo: "" };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Backdrop open={true}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h1" component="h2">
              Oops! Something went wrong.
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                window.location.reload();
              }}
            >
              Refresh
            </Button>
          </Grid>
        </Backdrop>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any
};

export default ErrorBoundary;
