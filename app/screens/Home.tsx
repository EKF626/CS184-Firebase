import { Text, View, Button } from 'react-native';
import React from "react";
import { getAuth } from "firebase/auth";

const Home = ({ navigation }: any) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const email = (user ? user.email : "");
  return (
    <View>
      <Text>{"Hi " + email}</Text>
      <Button onPress={() =>  navigation.navigate("Details")} title="See Details"/>
    </View>
  );
}

export default Home;