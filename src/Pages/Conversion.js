import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { MoneyPicker } from "../Components/MoneyPicker";

import api from '../Services/api';

import { API_KEY, API_ROUTE } from '@env';

export function Conversion() {
    async function requestApi () {
        const params = {
            q: "USD_BRL",
            compact: "ultra",
            apiKey: API_KEY
        }

        const { data } = await api.get(API_ROUTE, { params }).then();

        const conversionResult = Object.values(data)[0];

        console.log(conversionResult);
    }

    return (
        <View style={styles.container}>
            <Text>CONVERT MONEAY</Text>
            <TextInput 
                placeholder="Informe a quantia:"
                keyboardType="decimal-pad"
            />
            <MoneyPicker />
            <MoneyPicker />
            <TouchableOpacity 
                style={styles.button}
                onPress={() => requestApi()}
            >
                <Text>Converter</Text>
            </TouchableOpacity>
            <Text>
                <Text>
                    XXX = XXX API {}
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "green",
        borderRadius: 30,
        width: 200,
        height: 30,
    },
});
