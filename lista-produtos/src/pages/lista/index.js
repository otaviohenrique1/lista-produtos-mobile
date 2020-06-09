import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity,  RefreshControl } from "react-native";
import styles from "./styles";
// import { listaExemplo } from "./../data-app-pasta/exemplo-lista";
import { useNavigation } from "@react-navigation/native";
import Item from "./Item";
import { MaterialIcons } from "@expo/vector-icons";
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("db.db");

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export default function Cadastro() {
    const navigation = useNavigation();
    const navigateToCadastro = () => navigation.navigate('Cadastro');
    const handleNavigationCadastro = () => navigateToCadastro();

    const navigateToCadastroUpdate = () => navigation.navigate('CadastroUpdate');
    const handleNavigationCadastroUpdate = () => navigateToCadastroUpdate();

    const [items, setItems] = useState(null);
    const [refleshing, setRefleshing] = useState(false);

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM produtos",
                [],
                (_, { rows: { _array } }) => setItems(_array)
            );
        });
    }, []);

    // Recarrega a tela com botao
    const onReflesh = useCallback(() => {
        setRefleshing(true);
        wait(2000).then(() => setRefleshing(false));
    }, [refleshing]);

    const alteraProduto = (id) => {
        handleNavigationCadastroUpdate
    };

    const removeProduto = (id) => {
        db.transaction(
            tx => {
                tx.executeSql(`DELETE FROM produtos WHERE id = ?`, [id]);
            }
        );
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.areaTitulo}>
                <Text style={styles.titulo}>Lista</Text>
                <TouchableOpacity>
                    <MaterialIcons name="search" size={50} color="#111111"/>
                </TouchableOpacity>
            </View>
            {(items === null || items.length === 0) ?
                <View style={styles.listaVaziaArea}>
                    <Text style={styles.listaVaziaTexto}>Sem dados</Text>
                </View>
                :
                <View style={styles.listaArea}>
                    <FlatList
                        refreshControl={
                            <RefreshControl
                                refreshing={refleshing}
                                onRefresh={onReflesh}
                            />
                        }
                        data={items}
                        renderItem={
                            ({ item }) => (
                                <Item
                                    id={item.id}
                                    nome={item.nome}
                                    quantidade={item.quantidade}
                                    alterar={() => alteraProduto(item.id)}
                                    remover={() => removeProduto(item.id)}
                                />
                            )
                        }
                        // keyExtractor={item => item.id}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            }
            {/* <FlatList
                data={items}
                renderItem={
                    ({ item }) => (
                        <Item
                            id={item.id}
                            nome={item.nome}
                            quantidade={item.quantidade}
                            alterar={alteraProduto(item.id)}
                            remover={removeProduto(item.id)}
                        />
                    )
                }
                // keyExtractor={item => item.id.toString()}
                keyExtractor={item => item.id}
            /> */}
            <View style={styles.areaBotaoFlutuante}>
                <TouchableOpacity style={styles.botaoFlutuante} onPress={handleNavigationCadastro}>
                    <MaterialIcons name="add" size={70} color="#111111"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}