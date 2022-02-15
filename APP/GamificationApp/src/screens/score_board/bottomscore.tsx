import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native'
import { Text } from 'react-native-elements'

const BottomScoreBoard = ({players}) => {
    
    useEffect(() => {
    });

    const renderBoardList = ({ item }) => {
        return (
            <View
                style={styles.listStyle}
            >
                <Text style={styles.positionStyle}>{item.position}</Text>
                <Image
                        style={styles.imageStyle}
                        resizeMode='cover'
                        source={{uri:item.image}}
                    />
                <Text style={styles.nameStyle}>{item.prenom}</Text>
                <Text style={styles.scoreStyle}>{item.total_points}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <FlatList style={styles.container}
                data={players}
                renderItem={renderBoardList}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    listStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 1,
        marginBottom: 35,
    },
    positionStyle: {
        marginLeft: 20,
        fontWeight: 'bold',
        color: 'lightgrey',
        fontSize: 20,
    },
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 10
    },
    nameStyle: {
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 15,
    },
    scoreStyle: {
        marginRight: 20,
        fontWeight: 'bold',
        fontSize: 17,
    },
});

export default BottomScoreBoard
