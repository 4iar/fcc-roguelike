import React from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import '../styles/stats.scss';

const getState = (state) => {
  return {
    coordinates: state.game.player.coordinates,
    levelNumber: state.game.levelNumber,
    xp: state.game.player.xp,
    level: state.game.player.level,
    health: state.game.player.health,
    weapon: state.game.player.weapon,
    armour: state.game.player.armour,
  };
};

@connect(getState, null, null, {withRef: true})
export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      coordinates: this.props.coordinates,
      levelNumber: this.props.levelNumber,
      xp: this.props.xp,
      level: this.props.level,
      health: this.props.health,
      weapon: this.props.weapon,
      armour: this.props.armour,
    };
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    this.setState({
      coordinates: newProps.coordinates,
      levelNumber: newProps.levelNumber,
      xp: newProps.xp,
      level: newProps.level,
      health: newProps.health,
      weapon: newProps.weapon,
      armour: newProps.armour
    });
  }

  render() {
    return (
      <Col md={12}>
        <h2>
          Game stats
        </h2>
      </Col>
    );
  }
}
