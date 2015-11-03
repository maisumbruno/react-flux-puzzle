import React, { Component } from 'react';

import matchActions from '../actions/match';

export default class StartUp extends Component {

  displayName: 'StartUp'

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>
        { this.props.store.get('status') === 'initial' && (
              <div className="c-startup__item">
                <h1 className="c-title">React + Flux + Puzzle</h1>
                <p>a experiment puzzle game built with react + flux structure</p>
                <div className="c-startup__button">
                  <button className="c-button" onClick={matchActions.start}>Start</button>
                </div>
              </div>
          )
        }
      </div>
    )
  }

}