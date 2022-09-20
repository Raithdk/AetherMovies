import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const image_url = "https://image.tmdb.org/t/p/w500";

export default function MovieList({ type , url }){
    
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        fetchMovies();

        // TODO : Sort by popularity
     
    }, []);

    async function fetchMovies(){
        const response = await fetch(
            url
            ).then((response) => response.json())
            .then((data) => setMovieData(data.results));
        }

        const renderItem = ({ item }) => (
            <Movie movieId={item.id} title={item.title} imageurl={item.poster_path} voteAvg={item.vote_average} />
          );
          
    return (
        <View style={styles.container}>
            <Text style={styles.headline}>{type}</Text>
            <FlatList
                horizontal
                data={movieData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.movieList}
            />
        </View>
    )

}

const Movie = ( {title, movieId, imageurl, voteAvg }) => 
    {
        const navigation = useNavigation();
        return (
    <TouchableOpacity style={styles.movieView} 
        onPress={() => navigation.navigate("MovieDetails", {movieId})}>
        <Image style={styles.poster}  source={{uri: image_url+imageurl}} >
            </Image>
        <Text
            style={styles.title}
        >
            {title}
        </Text>
        <Text>
            Rating: {voteAvg} / 10
        </Text>
    </TouchableOpacity>
  )};

  

const styles = StyleSheet.create({
    container:{
        height: 400,
        borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    },
    headline:{
        fontSize: 28,
        margin: 10,
        alignSelf: 'flex-start',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    movieList:{
        width: '100%',
        height: 400,
    },
    movieText: {
        color: '#000',
    },
    poster: {
        width: 200,
        height: 300,
    },
    movieView: {
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
        height: 250,
    }
})