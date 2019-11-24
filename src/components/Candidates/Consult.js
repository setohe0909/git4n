import React, { Component } from 'react';
import { Container, Grid, Divider } from '@material-ui/core';
import Cookies from 'js-cookie';

import CandidateContainer from './Candidate';
import CandidateFormContainer from '../forms/candidate_forms';
import { withRouter } from 'react-router-dom';

class ConsultContainer extends Component {
  state = {
    candidates: !Cookies.get('candidates') ? [] : JSON.parse(Cookies.get('candidates')),
    isError: false,
    showProfile: false,
    data: null,
    currentCandidate: null
  };

  submit = (e, consult) => {
    e.preventDefault();
    const { candidates } = this.state;
    const allCandidates = [...candidates, consult];
    Cookies.set('candidates', allCandidates);

    this.setState({
      showProfile: true,
      candidates: allCandidates,
      currentCandidate: consult
    });
  };

  goBack = (e) => {
    e.preventDefault();
    this.setState({ isError: false, showProfile: false });
  };

  render() {
    const { isError, showProfile, currentCandidate } = this.state;

    return (
      <>
        {!showProfile ? (
          <Container maxWidth="xl" className="main-box">
            <h1>🗣 Consult new candidate</h1>
            <Divider />
            <Grid container>
              <Grid item sm={6} xs={12}>
                <CandidateFormContainer submit={this.submit} isError={isError} />
              </Grid>
              <Grid item sm={6} xs={12}>
                <img src="./img/dev.svg" alt="welcome" width="80%" className="welcome-img" />
              </Grid>
            </Grid>
          </Container>
        ) : (
          <CandidateContainer goBack={this.goBack} candidate={currentCandidate} />
        )}
      </>
    );
  }
}

export default withRouter(ConsultContainer);
