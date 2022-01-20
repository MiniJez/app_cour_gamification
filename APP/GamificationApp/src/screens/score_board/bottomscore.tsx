import React from 'react'
import { View, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native'
import { Images } from '@constants/index'
import { Text } from 'react-native-elements'
import TextStyle from '@styles/text'

const dataSource = [{ id: 1, position: 4, name: "Sky", score: 100, image: Images.personLead },
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

const BottomScoreBoard = () => {

    const renderBoardList = ({ item }) => {
        return (
            <View
                style={styles.listStyle}
            >
                <Text style={styles.positionStyle}>{item.position}</Text>
                <Image
                        style={styles.imageStyle}
                        resizeMode='cover'
                        source={item.image}
                    />
                <Text style={styles.nameStyle}>{item.name}</Text>
                <Text style={styles.scoreStyle}>{item.score}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <FlatList style={styles.container}
                data={dataSource}
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
        height: 30,
        width: 30
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
