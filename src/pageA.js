import React from 'react';
import { a, b } from './utils/const';
import { ccc } from './utils/time';

class PageA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    ccc();
    return (
      <h1>PageA</h1>
    );
  }
}
export default PageA;
