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
      <Col md={11}>
        <div id="status">

          <p className="status-value">
            <FontAwesome name="map-marker" /> {this.state.coordinates[0]} : {this.state.coordinates[1]} ({this.state.levelNumber}) 
          </p>
          
          <p className="status-value">
            <FontAwesome name="heart" /> {this.state.health}
          </p>

          <p className="status-value">
            <FontAwesome name="level-up" /> {this.state.xp}/100 ({this.state.level})
          </p>
          
          <p className="status-value">
            <FontAwesome name="legal " /> {this.state.weapon.name} ({this.state.weapon.damage})
          </p>
          
          <p className="status-value">
            <FontAwesome name="shield " /> {this.state.armour.name} ({this.state.armour.defence})
          </p>
        </div>
      </Col>
    );
  }
}
