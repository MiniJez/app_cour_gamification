import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, FlatList } from 'react-native'
import { Images } from '@constants/index'
import { AxiosCall } from '@services/axios_call'

var firstUpdate = true;

const LeadScoreBoard = () => {

    const [dataSource, setDatasource] = useState<any>();

    const getBestPlayers = () => {
        AxiosCall.getBestPlayers().then(async (res) => {
            console.log(res.data)
            setDatasource(res.data);
        })
    }

    useEffect(() => {
        if(firstUpdate){
            getBestPlayers();
            firstUpdate = false;
        }
    });

    const renderTopList = ({ item }) => {
        return (
            <View style={styles.viewsEach} >
                <Image 
                    source={{uri:item.image}}
                    resizeMode='cover'
                    style={styles.images}></Image>
                <Text style={styles.names}>{ item.prenom }</Text>
                <Text style={styles.scores}>{ item.total_points }</Text>
            </View>
        )
    }

    return (
        <View style={styles.viewLead}>
            <View style={styles.viewTop}>
                <FlatList 
                    data={dataSource}
                    renderItem={renderTopList}
                />
            </View>
            <View style={{flex: 0.5, paddingBottom: 10}}>
                <Image 
                    source={Images.podiumLeaderboard}
                    resizeMode='stretch'
                    style={styles.podiumImage}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewLead:{
        flex: 1
    },
    podiumImage:{
        width: "100%",
        height: "110%"
    },
    scoreImage:{
        
    },
    viewTop:{
        flex: 0.5,
        flexDirection: "row", 
        alignItems: "flex-end", 
        justifyContent: "space-between"
    },
    viewsEach:{
        width: '33%',
        alignItems: 'center'
    },
    names:{
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 20,
        textShadowColor: '#fff',
        textShadowOffset: {width: -2, height: 2},
        textShadowRadius: 10,
    },
    scores:{
        fontWeight: 'bold',
        fontSize: 25,
        width: '40%',
        marginTop: 5,
        textAlign: 'center',
        color: '#ffd11a',
        fontFamily: 'Monoton',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -2, height: 2},
        textShadowRadius: 10,
    },
    firstPlayer:{
        width: '33%',
        alignItems: 'center',
        alignSelf: 'center'
    },
    images:{
        width: "40%",
        height: "40%"
    }
});

export default LeadScoreBoard
