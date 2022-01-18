import React from 'react'
import { Button, ThemeProvider } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <Button title="Hey!" />
            </ThemeProvider>
        </SafeAreaProvider>
    )
}

export default App
