import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, RefreshControl } from "react-native";
import styles from "./styles";
import Item from "./Item";
import { MaterialIcons } from "@expo/vector-icons";
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("db.db");

export default function AppContainer() {
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS produtos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT NOT NULL,
          quantidade TEXT NOT NULL
        );
      `);
    });
  }, []);

  return (
    <View></View>
  );
}
