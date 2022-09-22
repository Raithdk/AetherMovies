
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const api_key = "961df8cdcd64067ee9b98dfffd750c77"

const image_url = "https://image.tmdb.org/t/p/w500";

export default function MovieDetails(Movie){

    const movieID = Movie.route.params.movieID;
    const posterUrl = Movie.route.params.posterUrl;

    const [movieData, setMovieData] = useState([]);

    const url = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key='+ api_key +'&language=en-US';

    useEffect(() => {
        fetchMovie();
    },[]);

    function fetchMovie(){
        fetch(url)
        .then((response) => response.json())
        .then((data) => setMovieData(data));
    }
    
    return (
        <View style={styles.container}>
            <Image style={styles.posterImage} source={{uri: posterUrl}}/>
            <Text style={styles.movieHeadline}>{movieData.original_title}</Text>
            <Text style={styles.movieFacts}>
                Budget: {movieData.budget} | 
                Rating: {movieData.vote_average} | 
                Release Status: {movieData.status}</Text>
            <Text style={styles.movieOverview}>{movieData.overview}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        margin: 20,
    },
    movieFacts:{
        margin: 10,
        fontSize: 18,
    },
    movieHeadline:{
        margin:10,
        fontSize: 26,
    },
    movieOverview:{
        margin: 10,
        fontSize: 15
    },
    posterImage:{
        width: 200,
        height: 300,
    }
});