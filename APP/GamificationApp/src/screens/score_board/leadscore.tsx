import React from 'react'
import { View, StyleSheet, ImageBackground, Image, Text } from 'react-native'
import { Images } from '@constants/index'

const LeadScoreBoard = () => {
    return (
        <View style={styles.viewLead}>
            <View style={styles.viewTop}>
                <View style={styles.viewsEach}>
                    <Image 
                        source={Images.tempLeadImage}
                        resizeMode='cover'
                        style={styles.images}></Image>
                    <Text style={styles.names}>Sony</Text>
                    <Text style={styles.scores}>215</Text>
                </View>
                <View style={styles.firstPlayer}>
                    <Image 
                        source={Images.tempLeadImage}
                        resizeMode='cover'
                        style={styles.images}></Image>
                    <Text style={styles.names}>Philou</Text>                    
                    <Text style={styles.scores}>350</Text>
                </View>
                <View style={styles.viewsEach}>
                    <Image 
                        source={Images.tempLeadImage}
                        resizeMode='cover'
                        style={styles.images}></Image>
                    <Text style={styles.names}>Dora</Text>
                    <Text style={styles.scores}>148</Text>
                </View>
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
