import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Images } from '@constants/index'
import LeadScoreBoard from './leadscore'
import BottomScoreBoard from './bottomscore'
import SearchPlayerScoreBoard from './searchplayer'

const ScoreBoardScreen = ({ navigation }) => {
    return (
        <View style={styles.viewMain}>
            <View style={styles.viewTop}>
                <View style={styles.viewCross}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image source={Images.crossRedLeaderboard} />
                    </TouchableOpacity>
                </View>
                <LeadScoreBoard></LeadScoreBoard>
            </View>
            <View style={styles.viewBottom}> 
                <BottomScoreBoard></BottomScoreBoard>
            </View>
            <View style={styles.viewSearch}> 
                <SearchPlayerScoreBoard></SearchPlayerScoreBoard>
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
