import React, { Component } from 'react';
import { Container, Grid, Divider, Button } from '@material-ui/core';
import Cookies from 'js-cookie';

import CandidateContainer from './Candidate';
import CancelIcon from '@material-ui/icons/Cancel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class ListContainer extends Component {
  state = {
    candidates: !Cookies.get('candidates') ? [] : JSON.parse(Cookies.get('candidates')),
    showProfile: false,
    currentCandidate: '',
    classes: {
      card: {
        minWidth: 275,
        marginBottom: '20px'
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
      },
      title: {
        fontSize: 14
      },
      pos: {
        marginBottom: 12
      }
    }
  };

  submit = (e, consult) => {
    e.preventDefault();
    const { candidates } = this.state;
    const allCandidates = [...candidates, consult];
    Cookies.set('candidates', allCandidates);

    this.setState({
      showProfile: true,
      candidates: allCandidates
    });
  };

  goBack = (e) => {
    e.preventDefault();
    this.setState({ isError: false, showProfile: false });
  };

  remove_candidate = (e, user) => {
    e.preventDefault();
    const { candidates } = this.state;
    const result = candidates.filter((item) => {
      if (item.github !== user) {
        return item;
      }
    });

    Cookies.set('candidates', result);
    this.setState({ candidates: result });
  };

  goProfile = (e, candidate) => {
    e.preventDefault();
    this.setState({ showProfile: true, currentCandidate: candidate });
  };

  render() {
    const { candidates, classes, showProfile, currentCandidate } = this.state;

    return (
      <>
        {!showProfile ? (
          <Container maxWidth="xl" className="main-box">
            <h1>🗣 My candidates</h1>
            <Divider />
            <br />
            <Grid container>
              <Grid item sm={6} xs={12}>
                <div id="overflow">
                  {candidates.map((candidate, index) => {
                    return (
                      <>
                        <Card key={index} className={classes.card}>
                          <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                              <img src={candidate.profileImg} alt="img" width="10%" />
                              <div className="list-title-contianer">
                                <strong>Name:&nbsp;</strong>
                                {candidate.name} {candidate.lastname}
                              </div>
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                              <strong>UserName:&nbsp;</strong>@{candidate.github}
                            </Typography>
                            <CancelIcon
                              className="remove-candidate"
                              onClick={(e) => this.remove_candidate(e, candidate.github)}
                            />
                          </CardContent>
                          <Button variant="contained" onClick={(e) => this.goProfile(e, candidate)}>
                            Profile
                          </Button>
                        </Card>
                        <br />
                      </>
                    );
                  })}
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <img src="./img/candidates.svg" alt="welcome" width="80%" className="welcome-img" />
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

export default ListContainer;
