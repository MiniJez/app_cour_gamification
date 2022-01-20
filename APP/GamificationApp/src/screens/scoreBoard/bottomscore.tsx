import React from 'react'
import { View, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native'
import { Images } from '@constants/index'
import { Text } from 'react-native-elements'

const BottomScoreBoard = () => {
    const dataSource = [{id:1, position: 4, name: "Sky", score: 100, image: Images.personLead}, 
                        {id:2,position: 5, name: "Toto", score: 50, image: Images.personLead}, 
                        {id:3,position: 6, name: "Titi", score: 30, image: Images.personLead}]

    return (
        <SafeAreaView>
            <FlatList style={styles.container}
                data={dataSource}
                renderItem={({item}) => (
                <View
                    style={styles.listStyle}>
                    <Text style={styles.positionStyle}>{item.position}</Text>
                    {/* <Image
                        style={styles.imageThumbnail}
                        source={item.image}
                    /> */}
                    <Text style={styles.nameStyle}>{item.name}</Text>
                    <Text style={styles.scoreStyle}>{item.score}</Text>
                </View>
                )}
                //Setting the number of column
                numColumns={3}
                keyExtractor={(item, index) => index}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    listStyle:{
        flex: 1,
        flexDirection: 'row',
        margin: 1
    },
    positionStyle:{

    },
    imageStyle:{

    },
    nameStyle:{

    },
    scoreStyle:{

    },
});

export default BottomScoreBoard
