import React from 'react';
import StyleSheet from 'react-style';
import Router from 'react-router';

const { Link, RouteHandler } = Router;

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: false
    };
  }

  render() {
    return (
      <header style={styles.header}>
        <h1>
          {this.state.search
            ? <input type="text" style={styles.input} onChange={this._handleChange.bind(this)} />
            : <Link to="app" style={styles.link}>digisquare</Link>
          }
          {this.props.searchable
            ? <button style={styles.search} onClick={this._handleClick.bind(this)}>?</button>
            : ''
          }
        </h1>
      </header>
    );
  }

  _handleClick() {
    this.props.onSearch(null);
    this.setState({
      search: !this.state.search
    });
  }

  _handleChange(event) {
    this.props.onSearch(event.target.value);
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
