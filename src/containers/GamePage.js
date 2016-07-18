import React from 'react';
import { Row, Grid } from 'react-bootstrap';

import Board from '../components/Board';
import Log from '../components/Log';
import Stats from '../components/Stats';

export default class GamePage extends React.Component {
  render() {
    return (
      <Grid>
        
        <Row>
          <Stats />
        </Row>
        
        <Row>
          <Board />
          <Log />
        </Row>
        
      </Grid>
    );
  }
}
