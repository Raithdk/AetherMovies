import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList } from "react-native";

const api_key = "961df8cdcd64067ee9b98dfffd750c77";

const image_url = "https://image.tmdb.org/t/p/w500";


export default function MovieList(navigation, type, url){

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchMovies();
        
    }, []);

    async function fetchMovies(){
        const response = await fetch(
            url
            ).then((response) => response.json())
            .then((data) => setData(data.results));
        }

        const renderItem = ({ item }) => (
            <Movie navigation={navigation} 
            movieId={item.id} 
            title={item.title} 
            imageurl={item.poster_path} 
            voteAvg={item.vote_average} />
          );
          

    return (
        <View style={styles.container}>
            <Text style={styles.headline}>{type}</Text>
            <FlatList
                horizontal
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.movieList}
            
            />
        </View>
    )
}

const Movie = ({ navigation, title, movieId, imageurl, voteAvg }) => (
    <View style={styles.movie}>
        <Image style={styles.poster}  source={{uri: image_url+imageurl}} >
            </Image>
        <Text
            onPress={() =>
            navigation.navigate("Details", {movieId})}
            style={styles.title}
        >
            {title}
        </Text>
        <Text>
            Rating: {voteAvg} / 10
        </Text>
        
    </View>
  );


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
    movie: {
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
        height: 250,
    }
})