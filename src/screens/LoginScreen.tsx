
import React from 'react'

// You can import from local files
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import Constants from 'expo-constants';
import { TextInput, Button, Card } from 'react-native-paper';

// or any pure javascript modules available in npm

import { useState } from 'react';

const isVisble = true;

function toggleSecureIcon() {
    setIsVisible(!isVisble);
  }


function LoginScreen() {
  const [login, setLogin] = useState();
  const [isVisble, setIsVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        SPACECRAFT
      </Text>
      <Card>
        <TextInput
          style={styles.input}
          label="Username"
          placeholder="Username"
        
          value={login}
        />
        <TextInput
       style={styles.input}
      label="Password"
    
      secureTextEntry={isVisble}
      
      mode='outlined'
      right={
        <TextInput.Icon
          onPress={toggleSecureIcon}
          icon={isVisble ? "eye" : "eye-off"}
        />
      }
      />
        <Button  style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
    Se connecter
        </Button>
     <Text style={styles.terms}>
        Reads Terms and conditions
      </Text>
      </Card>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  input: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  btn: {
    width:200,
    margin:60,
  },
   terms: {
    textAlign: 'center',
  },
});
function setIsVisible(arg0: boolean) {
    throw new Error('Function not implemented.');
}

