import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import Config from 'react-native-config'

const TableScreen = () => {

    useEffect(() => {
        console.log("API_URL is ",Config.API_URL)
    })

    return (
        <View>
            <Text>TableScreen ok</Text>
        </View>
    )
}

export default TableScreen
