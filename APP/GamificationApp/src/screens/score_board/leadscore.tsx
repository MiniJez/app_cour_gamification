import React from 'react'
import { View, StyleSheet, ImageBackground, Image } from 'react-native'
import { Images } from '@constants/index'

const LeadScoreBoard = () => {
    return (
        <View style={styles.viewLead}>
            <View>
                <ImageBackground source={Images.starsLeaderboard} style={styles.starsImage}>
                    
                </ImageBackground>
            </View>
            <View>
            <Image 
                source={Images.podiumLeaderboard}
                resizeMode='cover'
                style={styles.podiumImage}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewLead:{
        flex: 0.9
    },
    podiumImage:{
        width: "100%",
        height: "100%",
    },
    starsImage:{
        // flex: 0.5,
        // width: "100%",
        // height: "100%",
        // justifyContent: "flex-start"
    }
});

export default LeadScoreBoard
