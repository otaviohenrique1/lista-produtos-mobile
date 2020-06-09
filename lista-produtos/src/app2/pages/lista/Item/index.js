import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import Separator from "./Separator";

export default function Item({ id, nome, quantidade, alterar, remover }) {
    return (
        <View style={styles.item}>
            <View style={styles.itemAreaTitulo}>
                <Text style={styles.itemTitulo}>{nome}</Text>
                <Text style={styles.itemTitulo}>{quantidade}</Text> 
            </View>
            <View style={styles.areaBotao1}>
                <Separator />
                <View style={styles.areaBotao2}>
                    <TouchableOpacity style={styles.botao} onPress={alterar}>
                        <MaterialIcons name="delete" size={28} color="#111111"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={remover}>
                        <MaterialIcons name="edit" size={28} color="#111111"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}