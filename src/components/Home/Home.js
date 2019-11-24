import React from 'react';
import Container from '@material-ui/core/Container';

const HomeContainer = () => {
  return (
    <>
      <Container maxWidth="xl" className="main-box">
        <h1>Welcome to Git4n</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </p>
        <img src="./img/welcome.svg" alt="welcome" width="80%" className="welcome-img" />
      </Container>
    </>
  );
};

export default HomeContainer;
