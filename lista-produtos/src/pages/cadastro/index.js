import React from 'react';
import { View, Text, TextInput, TouchableOpacity, } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Separator from "./Separator";
import { MaterialIcons } from "@expo/vector-icons";
import { withFormik } from "formik";
import * as Yup from "yup";
// import * as FileSystem from "expo-file-system";
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("db.db");
// const db = SQLite.openDatabase(`${FileSystem.documentDirectory}/database_app/database.db`);
// const db = SQLite.openDatabase(`${FileSystem.documentDirectory}/SQLite/db.db`);

const Cadastro = (props) => {
    const navigation = useNavigation();
    const navigateToLista = () => navigation.navigate('Lista');
    const handleNavigationLista = () => navigateToLista();

    return (
        <View style={styles.container}>
            <View style={styles.areaHeader}>
                <TouchableOpacity style={styles.botaoVoltar} onPress={handleNavigationLista}>
                    <MaterialIcons name="arrow-back" size={50} color="#111111"/>
                </TouchableOpacity>
                <View style={styles.areaTitulo}>
                    <Text style={styles.titulo}>Cadastro</Text>
                </View>
            </View>
            <View style={styles.areaFormulario}>
                <View style={styles.areaCampos}>
                    <View>
                        <TextInput
                            style={styles.campos}
                            value={props.values.nome}
                            placeholder="Digite o nome"
                            onChangeText={text => props.setFieldValue('nome', text)}
                        />
                        { props.touched.nome 
                        && props.errors.nome 
                        && <Text style={styles.erroTexto}>{props.errors.nome}</Text> }
                    </View>
                    <View>
                        <TextInput
                            style={styles.campos}
                            value={props.values.quantidade}
                            placeholder="Digite a quantidade"
                            onChangeText={text => props.setFieldValue('quantidade', text)}
                        />
                        { props.touched.quantidade 
                        && props.errors.quantidade 
                        && <Text style={styles.erroTexto}>{props.errors.quantidade}</Text> }
                    </View>
                    <Separator />
                </View>
                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={props.handleSubmit}>
                        <MaterialIcons
                            name="save"
                            size={60}
                            color="#111111"
                        />
                        <Text style={styles.botaoTexto}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}>
                        <MaterialIcons
                            name="clear"
                            size={60}
                            color="#111111"
                        />
                        <Text style={styles.botaoTexto}>Limpar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default withFormik({
    mapPropsToValues: () => ({ nome: '', quantidade: '' }),
    validationSchema: Yup.object().shape({
        nome: Yup.string()
            .required('Preencha o campo nome'),
        quantidade: Yup.string()
            .required('Preencha o campo quantidade'),
    }),
    handleSubmit: (values) => {
        // const data = {
        //     nome: values.nome,
        //     quantidade: values.quantidade
        // };
        // db.transaction(
        //     (tx) => {
        //         tx.executeSql(
        //             "INSERT INTO produtos (nome, quantidade)    VALUES (?, ?)",
        //             [data]
        //         );
        //     }
        // );
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "INSERT INTO produtos (nome, quantidade) VALUES (?, ?)",
                    [values.nome, values.quantidade]
                );
            }
        );
    },
})(Cadastro);