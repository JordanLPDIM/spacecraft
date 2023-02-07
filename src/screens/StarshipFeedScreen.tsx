import React from "react";
import { SafeAreaView, StyleSheet, FlatList, Text, StatusBar, View, ActivityIndicator } from "react-native";
import { Card } from "react-native-paper";
import { default as data } from "../../api/data.json";


interface ItemProps {
    name: string;
    model: string;
    crew: number;
    hyperdrive_rating : number;
    cost_in_credits : number
  }

  const Item = ({ name, model, crew, hyperdrive_rating, cost_in_credits  }: ItemProps) => {
    return (
    <Card style={styles.cardContainer}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content style={styles.cardContainerContent}>
        <Text style={styles.textContent}>Name: {name}</Text>
        <Text style={{ color: 'black' }}>Model: {model}</Text>
        <Text style={{ color: 'black' }}>Crew: {crew}</Text>
        <Text style={{ color: 'black' }}>hyperdrive_rating: {hyperdrive_rating}</Text>
        <Text style={{ color: 'black' }}>cost_in_credits: {cost_in_credits}</Text>
        </Card.Content>
        </Card>
    );
  };

export const StarshipFeedScreen = () => {
    const renderItem = ({ item }: any) => <Item name={item.name} model={item.model} crew={item.crew} hyperdrive_rating={item.hyperdrive_rating}
        cost_in_credits={item.cost_in_credits} />;
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList style={styles.containerFlat}
        data={data.results}
        renderItem={renderItem}
        // keyExtractor={(item) => item.id}
    />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  containerFlat: {
   
  },
  cardContainer:{
    margin:10,
    
  },
  cardContainerContent:{
 

  },
  textContent:{
    color:'blue',
    textAlign:'center',
  }
});