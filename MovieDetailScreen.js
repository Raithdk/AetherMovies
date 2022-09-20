import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList } from "react-native";
import MovieList from "./MovieList";


export default function MovieDetailScreen(navigation){

    return (
        <View>
            <MovieList navigation={navigation} type="Popular Movies"/>
        </View>
    );

}