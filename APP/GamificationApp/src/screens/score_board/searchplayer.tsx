import React, { useEffect, useState } from 'react'
import {View, StyleSheet, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchPlayerScoreBoard = ({setPlayers}) => {
  
  const [search, setSearch] = useState('');

  const handleKeyPress = async (event) => {
    try {
      var baseplayers = await AsyncStorage.getItem('@baseplayers').then(req => JSON.parse(req));
      // console.log(baseplayers)
      setPlayers(baseplayers.filter(x => x.prenom.startsWith(search)))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="search" size={20} color="#000" />
        <TextInput style={styles.searchBar} 
                  placeholder="player name" 
                  onKeyPress={handleKeyPress} 
                  onChangeText={newsearch => setSearch(newsearch)} 
                  defaultValue={search}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    width: '90%',
  },
  searchImage: {},
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    marginTop: 20,
    width: '90%',
  },
  searchIcon: {
    padding: 10,
  },
});

export default SearchPlayerScoreBoard;
