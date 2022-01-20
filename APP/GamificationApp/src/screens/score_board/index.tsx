import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import { Images } from '@constants/index'
import LeadScoreBoard from './leadscore'
import BottomScoreBoard from './bottomscore'

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
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 0.55
    },
    viewCross:{
        flex: 0.1,
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});

export default ScoreBoardScreen
