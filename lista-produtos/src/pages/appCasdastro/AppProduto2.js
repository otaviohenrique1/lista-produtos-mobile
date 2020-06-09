import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { MaterialIcons } from "@expo/vector-icons";
import * as Yup from "yup";
import styles from "./styles";

const db = SQLite.openDatabase("db.db");

function Items({ done: doneHeading, onPressItem }) {
    const [items, setItems] = React.useState(null);

    React.useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                `select * from items where done = ?;`,
                [doneHeading ? 1 : 0],
                (_, { rows: { _array } }) => setItems(_array)
            );
        });
    }, []);

    const heading = doneHeading ? "Completed" : "Todo";

    if (items === null || items.length === 0) {
        return null;
    }

    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeading}>{heading}</Text>
            {items.map(({ id, done, value }) => (
                <TouchableOpacity
                    key={id}
                    onPress={() => onPressItem && onPressItem(id)}
                    style={{
                        backgroundColor: done ? "#1c9963" : "#fff",
                        borderColor: "#000",
                        borderWidth: 1,
                        padding: 8
                }}
                >
                    <Text style={{ color: done ? "#fff" : "#000" }}>{value}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

export default function AppProduto() {
    const [text, setText] = React.useState(null)
    const [forceUpdate, forceUpdateId] = useForceUpdate()

    React.useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                "create table if not exists items (id integer primary key not null, done int, value text);"
            );
        });
    }, []);

    const add = (text) => {
        // is text empty?
        if (text === null || text === "") {
            return false;
        }

        db.transaction(
            tx => {
                tx.executeSql("insert into items (done, value) values (0, ?)", [text]);
                tx.executeSql("select * from items", [], (_, { rows }) =>
                    console.log(JSON.stringify(rows))
                );
            },
            null,
            forceUpdate
        );
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
                            onChangeText={text => setText(text)}
                            onSubmitEditing={() => {
                                add(text);
                                setText(null);
                            }}
                            placeholder="Nome"
                            style={styles.campos}
                            value={text}
                        />
                        <TextInput
                            onChangeText={text => setText(text)}
                            onSubmitEditing={() => {
                                add(text);
                                setText(null);
                            }}
                            placeholder="Quantidade"
                            style={styles.campos}
                            value={text}
                        />
                        <View style={styles.areaBotaoCadatro}>
                            <TouchableOpacity style={styles.botaoCadastro}>
                                <MaterialIcons name="add" size={30} color="#111111"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botaoCadastro}>
                                <MaterialIcons name="clear" size={30} color="#111111"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.areaLista}>
                <Items
                    key={`forceupdate-todo-${forceUpdateId}`}
                    done={false}
                    onPressItem={id =>
                        db.transaction(
                            tx => {
                                tx.executeSql(`update items set done = 1 where id = ?;`, [
                                    id
                                ]);
                            },
                            null,
                            forceUpdate
                        )
                    }
                />
                <Items
                    done
                    key={`forceupdate-done-${forceUpdateId}`}
                    onPressItem={id =>
                        db.transaction(
                            tx => {
                                tx.executeSql(`delete from items where id = ?;`, [id]);
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