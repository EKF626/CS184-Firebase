import { Text, View } from 'react-native';
import React from "react";
import { getAuth } from "firebase/auth";

const Details = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const email = (user ? user.email : "");
  let fromUCSB = false;
  if (email?.includes("@ucsb") || email?.includes("@umail.ucsb")) {
    fromUCSB = true
  }
  return (
    <View>
      <Text>{fromUCSB ? "You're from UCSB, cool!" : "You're not from UCSB, lame."}</Text>
    </View>
  );
}

export default Details;