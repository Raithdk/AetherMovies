import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const image_url = "https://image.tmdb.org/t/p/w500";

export default function MovieList({ type , url }){
    
    // Data for all movies
    const [movieData, setMovieData] = useState([]);
    const [isSorted, setIsSorted] = useState(true);
    // When loaded, fetch all movies
    useEffect(() => {
        fetchMovies();
    }, []);

    async function fetchMovies(){
        await fetch(
            url
            ).then((response) => response.json())
            .then((data) => setMovieData(data.results));
        }

    function updateSortMovies(){
        setIsSorted(isSorted ? false : true);
        const arr = [...movieData];
        isSorted ? arr.sort((a,b) => {return a.vote_average - b.vote_average}) : arr.sort((a,b) => {return b.vote_average - a.vote_average});
        setMovieData([...arr]);
    }

    const renderItem = ({ item }) => 
    (
        <Movie movieID={item.id} title={item.title} imageurl={item.poster_path} voteAvg={item.vote_average} />
    );
    
    return (
        <View style={styles.container}>
            <View style={styles.headlineContainer}>
                <Text style={styles.headline}>{type}</Text>
                <TouchableOpacity onPress={updateSortMovies} style={styles.sortButton}>
                    <Text style={styles.SortButtonText}>Sort by Rating  {isSorted ? '>': '<'}</Text>
                </TouchableOpacity>
            </View> 
            <FlatList
                horizontal
                extraData={movieData}
                data={movieData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.movieList}
            />
        </View>
    )
}

const Movie = ( {title, movieID, imageurl, voteAvg }) => 
    {
        const navigation = useNavigation();
        const posterUrl = image_url+imageurl;
        return (
            <TouchableOpacity style={styles.movieView} 
                onPress={() => navigation.navigate("MovieDetails", {movieID, posterUrl })}>
                <Image style={styles.poster}  source={{uri: posterUrl}} >
                </Image>
                <Text style={styles.title}>
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
    headlineContainer:{
        flexDirection: 'row',
        padding: 10,
        width: 500
    },

    sortButton: {
        elevation: 4,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
      },
    SortButtonText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
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