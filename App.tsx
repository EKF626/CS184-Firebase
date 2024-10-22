import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebaseConfig";
import Login from "./app/screens/Login";
import Home from "./app/screens/Home";
import Details from "./app/screens/Details";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
       <Stack.Screen name="Home" component={Home}/>
       <Stack.Screen name="Details" component={Details}/>
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Inside Layout" component={InsideLayout} options={{headerShown: false}}/>
        ) : (
          <Stack.Screen name="Login" component={Login}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}