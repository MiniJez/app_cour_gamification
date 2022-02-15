import React, { useEffect, useState } from 'react'
import {View, StyleSheet, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';

const SearchPlayerScoreBoard = () => {
  
  const [search, setSearch] = useState('');

  const handleKeyPress = (event) => {
    console.log(search)
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
