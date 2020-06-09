import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

const db = SQLite.openDatabase("db.db");

function Items({ removeProduto }) {
    const [items, setItems] = React.useState(null);

    React.useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                `select * from produtos;`,
                [],
                (_, { rows: { _array } }) => setItems(_array)
            );
        });
    }, []);

    if (items === null || items.length === 0) {
        return null;
    }

    return (
        <View style={styles.itensContainer}>
            {items.map(item => (
                <View style={styles.item} key={item.id}>
                    <View style={styles.itemAreaTitulo}>
                    <Text style={styles.itemTitulo}>{item.nome}</Text>
                    <Text style={styles.itemTitulo}>{item.quantidade}</Text>
                    </View>
                    <View style={styles.areaBotaoItem}>
                    <TouchableOpacity style={styles.botaoItem} onPress={() => removeProduto && removeProduto(item.id)}>
                        <MaterialIcons name="delete" size={28} color="#111111"/>
                    </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
}

export default function AppProduto() {
    const [nome, setNome] = useState(null);
    const [quantidade, setQuantidade] = useState(null);
    const [forceUpdate, forceUpdateId] = useForceUpdate();

    function handleResetForm() {
        setNome(null);
        setQuantidade(null);
    }

    React.useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                "create table if not exists produtos (id integer primary key not null, nome text, quantidade text);"
            );
        });
    }, []);

    const add = (nome, quantidade) => {
        if (nome === null || nome === "" || quantidade === null || quantidade === "") {
            return (
                Alert.alert(
                    "Erro",
                    "Campos nome e quantidade vazios"
                )
            );
        }

        db.transaction(
            tx => {
                tx.executeSql("insert into produtos (nome, quantidade) values (?, ?)", [nome, quantidade]);
            },
            null,
            forceUpdate
        );

        setNome(null);
        setQuantidade(null);
        
        Alert.alert(
            "Sucesso",
            "Produto salvo"
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.areaHeader}>
                <Text style={styles.titulo}>Lista de compras</Text>
                <TouchableOpacity style={styles.busca}>
                    <MaterialIcons name="search" size={40} color="#111111"/>
                </TouchableOpacity>
            </View>
            <View style={styles.areaPagina}>
                <View style={styles.areaFormulario}>
                    <View style={styles.areaCampos}>
                        <TextInput
                            onChangeText={setNome}
                            placeholder="Nome"
                            style={styles.campos}
                            value={nome}
                        />
                        <TextInput
                            onChangeText={setQuantidade}
                            placeholder="Quantidade"
                            style={styles.campos}
                            value={quantidade}
                        />
                        <View style={styles.areaBotaoCadatro}>
                            <TouchableOpacity
                                style={styles.botaoCadastro}
                                onPress={() => add(nome, quantidade)}
                            >
                                <MaterialIcons name="add" size={30} color="#111111"/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.botaoCadastro}
                                onPress={handleResetForm}
                            >
                                <MaterialIcons name="clear" size={30} color="#111111"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.areaLista}>
                <Items
                    key={`forceupdate-todo-${forceUpdateId}`}
                    removeProduto={
                        id =>
                        db.transaction(
                            tx => {
                                tx.executeSql(`delete from produtos where id = ?;`, [id]);
                            },
                            null,
                            forceUpdate
                        )
                    }
                />
            </ScrollView>
        </View>
    );
}

function useForceUpdate() {
    const [value, setValue] = useState(0);
    return [() => setValue(value + 1), value];
}