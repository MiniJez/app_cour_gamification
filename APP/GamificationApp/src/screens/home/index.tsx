import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { AxiosCall } from '@services/axios_call'

const HomeScreen = () => {

    useEffect(() => {
        console.log(console.time("test"))
        AxiosCall.getAllPlayers().then((res) => {
            console.log(res)
            console.log(console.timeEnd("test"))
        })
    }, [])

    return (
        <View>
            <Button
                title={'Leader Board'}
                containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
            />
        </View>
    )
}

export default HomeScreen
