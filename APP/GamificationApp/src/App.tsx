import MainNavigation from 'navigation'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
    return (
        <SafeAreaProvider>
            <MainNavigation/>
        </SafeAreaProvider>
    )
}

export default App
