import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MovieList from './MovieList.js';

const apiKey = '77d418dbeff26425474604053b0ed4f4';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false
    }
  }

  componentWillMount(props) {
    this.setState({
      loading: true
    });
  }

  render() {
    console.log(this.state.movies)

    return (
      <MovieList 
        movies={this.state.movies} 
        loading={this.state.loading} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
