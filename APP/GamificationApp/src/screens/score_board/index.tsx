import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Images } from '@constants/index'
import LeadScoreBoard from './leadscore'
import BottomScoreBoard from './bottomscore'
import SearchPlayerScoreBoard from './searchplayer'
import AsyncStorage from '@react-native-async-storage/async-storage';

const players = [{ id: 1, position: 4, name: "Sky", score: 100, image: Images.personLead },
{ id: 2, position: 5, name: "Toto", score: 50, image: Images.personLead },
{ id: 3, position: 6, name: "Titi", score: 40, image: Images.personLead },
{ id: 4, position: 7, name: "Tutu", score: 30, image: Images.personLead },
{ id: 5, position: 8, name: "Tata", score: 20, image: Images.personLead },
{ id: 6, position: 9, name: "Coco", score: 19, image: Images.personLead },
{ id: 7, position: 10, name: "Momo", score: 15, image: Images.personLead },
{ id: 8, position: 11, name: "Rara", score: 13, image: Images.personLead },
{ id: 9, position: 12, name: "Vuvu", score: 10, image: Images.personLead },
{ id: 10, position: 13, name: "Mémé", score: 9, image: Images.personLead },
{ id: 11, position: 14, name: "Papa", score: 5, image: Images.personLead },
{ id: 12, position: 15, name: "Popo", score: 1, image: Images.personLead },
]

const ScoreBoardScreen = ({ navigation }) => {
    const [dataSource, setDatasource] = useState('');

    useEffect(() => {
        const playersAsync = async () => {
            try {
                setDatasource(JSON.stringify(players));
                await AsyncStorage.setItem('@baseplayers', JSON.stringify(players))
            } catch (e) {
                console.log(e)
            }
        };

        playersAsync();
    }, []);

    const onGoBackPress = () => {
        navigation.navigate('HomeScreen')
    }

    return (
        <View style={styles.viewMain}>
            <View style={styles.viewTop}>
                <View style={styles.viewCross}>
                    <TouchableOpacity onPress={onGoBackPress}>
                        <Image source={Images.crossRedLeaderboard} />
                    </TouchableOpacity>
                </View>
                <LeadScoreBoard></LeadScoreBoard>
            </View>
            <View style={styles.viewBottom}> 
                <BottomScoreBoard players={dataSource}></BottomScoreBoard>
            </View>
            <View style={styles.viewSearch}> 
                <SearchPlayerScoreBoard setPlayers={setDatasource}></SearchPlayerScoreBoard>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    viewMain:{
        flex: 1,
        backgroundColor: '#ff751a',
    },
    viewTop:{
        flex: 0.45
    },
    viewBottom:{
        backgroundColor: 'white',
        borderRadius: 30,
        flex: 0.45
    },
    viewSearch:{
        flex: 0.1
    },
    viewCross:{
        flex: 0.1,
        flexDirection: 'row',
        alignSelf: 'flex-end'
    }
});

export default ScoreBoardScreen
