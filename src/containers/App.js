import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    // Destructing
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Robots</h1>
        <SearchBox searchChange={ this.onSearchChange }/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={ filteredRobots } />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
  }
}

export default App;