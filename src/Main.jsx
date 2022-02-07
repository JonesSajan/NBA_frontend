import React, { Component } from 'react';
import Forms from './Forms';
import DisplayStudent from './DisplayStudent';
import DisplayMidTerm1Co from './DisplayMidTerm1Co';
import DisplayMidTerm1Marks from './DisplayMidTerm1Marks';
import DisplayMidTerm2Co from './DisplayMidTerm2Co';
import DisplayMidTerm2Marks from './DisplayMidTerm2Marks';
;


class Main extends Component {
  render() {
    return <>
      <Forms />
      <DisplayStudent />
      <DisplayMidTerm1Co />
      <DisplayMidTerm1Marks />
      <DisplayMidTerm2Co />
      <DisplayMidTerm2Marks />
    </>
  }
}

export default Main;