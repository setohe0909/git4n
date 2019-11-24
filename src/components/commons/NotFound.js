import React, { PureComponent } from 'react';
import Container from '@material-ui/core/Container';

import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';

class NotFound extends PureComponent {
  handleBackClick = () => this.props.history.go(-1);
  handleHomeClick = () => this.props.history.push('/');

  render() {
    return (
      <>
        <Container maxWidth="xl" className="main-box">
          <div className="btn-container">
            <Button variant="contained" onClick={() => this.handleBackClick()}>
              Go to Back
            </Button>
            <Button variant="contained" onClick={() => this.handleHomeClick()}>
              Go to Home
            </Button>
          </div>
          <img src="./img/404.svg" alt="welcome" width="80%" className="welcome-img" />
        </Container>
      </>
    );
  }
}

export default withRouter(NotFound);
