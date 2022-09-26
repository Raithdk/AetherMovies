
import { View } from 'react-native';
import { ScrollView } from 'react-native';

import MovieList from "./MovieList";

const api_key = "961df8cdcd64067ee9b98dfffd750c77";

export default function MainScreen(navigation){

    return (
        <View>
            <ScrollView>
                <MovieList 
                navigation={navigation} 
                type="Popular Movies" 
                url={`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`}
                />
                <MovieList 
                navigation={navigation} 
                type="Now Playing" 
                url={`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US`}
                />
                <MovieList 
                navigation={navigation} 
                type="Top Rated" 
                url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`}
                />
            </ScrollView>
        </View>
    );

}