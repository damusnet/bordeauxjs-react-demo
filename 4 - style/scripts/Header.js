import React from 'react';
import StyleSheet from 'react-style';

export default class Header extends React.Component {

  render() {
    return (
      <header style={styles.header}>
        <h1>Digisquare</h1>
      </header>
    );
  }

}

var styles = StyleSheet.create({
  header: {
    color: 'white',
    backgroundColor: 'black',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    paddingLeft: 10
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  input: {
    width: '75%',
    height: '2em',
    verticalAlign: 'top'
  },
  search: {
    float: 'right',
    padding: '8px',
    marginRight: '30px'
  }
});
