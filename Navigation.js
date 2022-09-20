import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./MovieList";
import MovieDetailScreen from "./MovieDetailScreen";



const Stack = createNativeStackNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AetherMovies">
                <Stack.Screen name="AetherMovies" component={() => <MovieDetailScreen/>}/>  
                <Stack.Screen name="Movie1" component={SecondScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}





function SecondScreen() {
    return(
    <View style={styles.container}>
      <Text>Movie</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})