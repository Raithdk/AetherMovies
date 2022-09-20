
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./MainScreen";
import MovieDetails from "./MovieDetails";



const Stack = createNativeStackNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AetherMovies">
                <Stack.Screen name="AetherMovies" component={MainScreen}/>  
                <Stack.Screen name="MovieDetails" component={MovieDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}