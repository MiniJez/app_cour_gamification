import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Images } from '@constants/index'
import LeadScoreBoard from './leadscore'
import BottomScoreBoard from './bottomscore'
import SearchPlayerScoreBoard from './searchplayer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosCall } from '@services/axios_call'

var firstUpdate = true;

const ScoreBoardScreen = ({ navigation }) => {
    const [dataSource, setDatasource] = useState<any>();

    const getAllPlayers = () => {
        AxiosCall.getAllPlayers().then(async (res) => {
            // console.log(res.data)
            var count = 1;
            res.data.forEach(element => {
                // console.log(element)
                element.position = count;
                count = count+1;
            });
            res.data.shift();
            res.data.shift();
            res.data.shift();
            setDatasource(res.data);
            await AsyncStorage.setItem('@baseplayers', JSON.stringify(res.data))
        })
    }

    useEffect(() => {
        if(firstUpdate){
            getAllPlayers();
            firstUpdate = false;
        }
    });

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
