import React, { Component } from 'react';
import classNames from 'classnames';
import Cookies from 'js-cookie';

import api from '../../services/github_services';
import MaterialTable from 'material-table';
import { Container, Link, Button, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  avatar: {
    border: '5px #3f1f62 solid'
  },
  bigAvatar: {
    width: 80,
    height: 80
  }
});

class CandidateContainer extends Component {
  state = {
    repos: '',
    totalRepos: 0,
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Description', field: 'description' },
      { title: 'Language', field: 'language' },
      { title: 'Branch', field: 'default_branch' },
      { title: 'URL (Github)', field: 'html_url' }
    ],
    data: [],
    info: {},
    profileimgDefault: '/img/avatar5.jpg'
  };

  componentDidMount() {
    const { candidate } = this.props;

    api.get_user_data(candidate.github).then((info) => {
      if (info) {
        const candidates = JSON.parse(Cookies.get('candidates'));

        const allCandidates = candidates.map((item) => {
          if (item.github === candidate.github) {
            item.profileImg = info.data.avatar_url ? info.data.avatar_url : this.state.profileimg;
          }

          return item;
        });

        Cookies.set('candidates', allCandidates);

        this.setState({ info: info.data });
      }
    });

    api.get_repos(candidate.github).then((reposByUser) => {
      if (reposByUser) {
        this.setState({ totalRepos: reposByUser.data.length, data: reposByUser.data });
      }
    });
  }

  render() {
    const { goBack, classes } = this.props;
    const { columns, data, profileimg, info, totalRepos } = this.state;

    return (
      <>
        <div className="back-btn">
          <Button variant="contained" type="submit" onClick={(e) => goBack(e)}>
            Back
          </Button>
        </div>
        <Container maxWidth="xl" className="main-box">
          <Container maxWidth="xl" className="avatar-container">
            <div>
              {profileimg}
              <Avatar
                alt="User"
                src={info.avatar_url ? info.avatar_url : profileimg}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
              <div className="fields-header-candidate">
                <strong>Name:&nbsp;</strong>
                <span>{info.name}</span>
              </div>
              <div className="fields-header-candidate">
                <strong>User Github:&nbsp;</strong>
                <span>{info.login}</span>
              </div>
              <div className="fields-header-candidate">
                <strong>Total Repos:&nbsp;</strong>
                <span>{totalRepos}</span>
                <div className="go-github">
                  <Link color="#cfa2e7" className="links" variant="contained" href={info.html_url}>
                    Go to Github profile
                  </Link>
                </div>
              </div>
            </div>
          </Container>

          <div className="container-materil-table">
            <MaterialTable title="Candidate Profile" columns={columns} data={data} />
          </div>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(CandidateContainer);
