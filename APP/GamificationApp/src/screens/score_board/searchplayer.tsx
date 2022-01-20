import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Icon } from 'react-native-elements';

const SearchPlayerScoreBoard = () => {
    return (
        <View>
            <View style={styles.searchSection}>
                <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
                <TextInput
                    style={styles.searchBar}
                    placeholder="player name"
                />
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    searchBar:{
        width: '90%'
    },
    searchImage:{

    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 30,
        marginTop: 20,
        width: '90%'
    },
    searchIcon: {
        padding: 10,
    },
});

export default SearchPlayerScoreBoard
