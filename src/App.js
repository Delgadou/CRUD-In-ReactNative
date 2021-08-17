import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { UserForm } from './views/UserForm';
import { UserList } from './views/UserList';
import { Button, Icon } from 'react-native-elements';

const Stack = createStackNavigator();

function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRoutName="UserList"
                    screenOptions={screenOptions}>
                <Stack.Screen 
                    name="UserList" 
                    component={UserList} 
                    options={({ navigation }) => {
                        return {
                            title: "Lista de Usuários",
                            headerRight: () => (
                                <Button
                                onPress={() => navigation.navigate('UserForm')}
                                    type={"clear"}
                                    icon={<Icon name="add" size={25} color="white" />}
                                />
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name="UserForm" 
                    component={UserForm}
                    options={{
                        title: "Formulário de Usuários"
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
}