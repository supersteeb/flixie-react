//import liraries
import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, FlatList } from 'react-native';
import MovieCard from './MovieCard.js';

// create a component
class MovieList extends Component {
    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.loading ? <Text>Loading...</Text> : null 
                }
                <FlatList
                    data={this.props.movies}
                    keyExtractor={(movie) => movie.id}
                    renderItem={(movieItem) => <MovieCard {...movieItem.item} />} 
                    onREfresh={() => alert('test')}
                    refreshing={this.props.loading} 
                />
            </View>
            
        );
    }
}


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MovieList;
