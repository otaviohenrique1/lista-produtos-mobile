import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cadastro from "./pages/cadastro";
import Lista from "./pages/lista";
import CadastroUpdate from "./pages/cadastroUpdate";

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Cadastro" component={Cadastro}/>
                <AppStack.Screen name="Lista" component={Lista}/>
                <AppStack.Screen name="CadastroUpdate" component={CadastroUpdate}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}