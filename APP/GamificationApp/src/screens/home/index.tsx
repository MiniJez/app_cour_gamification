import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Image, Text } from 'react-native-elements'
import { AxiosCall } from '@services/axios_call'
import LeadScoreBoard from '@screens/score_board/leadscore'
import Images from '@constants/images'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
    const [players, setPlayers] = useState<Array<UserInterface>>()
    const [currentPlayer, setCurrentPlayer] = useState<UserInterface>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        AxiosCall.getAllPlayers().then((res) => {
            setPlayers(res.data)
            getCurrentPlayer(res.data)
        })
    }, [])

    useEffect(() => {
        console.log('test', currentPlayer)
        if (currentPlayer != undefined) {
            setLoading(false)
        }
    }, [currentPlayer])

    const getCurrentPlayer = async (allPlayers: Array<UserInterface>) => {
        let currentPlayerName = await AsyncStorage.getItem('@username')
        let cplayer = allPlayers.filter((value) => value.prenom == `${currentPlayerName?.charAt(0).toUpperCase().trim()}${currentPlayerName?.slice(1)}`)[0]
        console.log(allPlayers)
        setCurrentPlayer(cplayer)
    }

    return (
        loading ?
            <View>
                <Text>Loading</Text>
            </View>
            :
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image
                        source={{
                            uri: currentPlayer?.image,
                        }}
                        style={styles.image}
                        resizeMode='cover'
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.name}>{currentPlayer?.prenom}</Text>
                    <View style={styles.imgContainerBadge}>
                        <Image
                            source={currentPlayer?.total_points < 300 ? Images.bronze : (currentPlayer?.total_points < 500 ? Images.argent : Images.or)}
                            style={styles.image}
                        />
                    </View>
                </View>
                <View style={styles.leaderBoardContainer}>
                    <Button
                        title={'Leader Board'}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginBottom: 30
                        }}
                        onPress={() => navigation.navigate("ScoreBoardScreen")}
                    />
                    <LeadScoreBoard />
                </View>
            </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    imgContainer: {
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 200,
        overflow: "hidden",
    },
    imgContainerBadge: {
        width: 100,
        height: 100,
    },
    leaderBoardContainer: {
        alignItems: 'center',
        height: 350,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    name: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 30
    }
})
