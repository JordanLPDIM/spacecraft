
import React, { useState, createContext } from 'react';

// You can import from local files
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image, SafeAreaView, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import { useQuery } from "@tanstack/react-query";
import { useStarships } from '../hooks/useStarships';

const StarshipsContext = createContext(null);

const Item = ({name }: any) => {
    return (
    <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
            <Text>Name: {name}</Text>
        </Card.Content>
        </Card>
    );
  };


export function StarshipApiScreen() {
    const renderItem = ({ item }: any) => <Item name={item.name}  />;
       
  const { data, status } = useStarships();

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'error') {
    return <Text>Error!</Text>;
  }

  return (
    <SafeAreaView>
      <View>
        <FlatList 
        data={data.results}
        renderItem={renderItem}
        // keyExtractor={(item) => item.id}
    />
      </View>
    </SafeAreaView>
  );
}

