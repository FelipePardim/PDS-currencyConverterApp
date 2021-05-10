import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { MoneyPicker } from "../Components/MoneyPicker";

import api from "../Services/api";

import { API_KEY, API_ROUTE } from "@env";

export function Conversion() {
    const [currencyAmount, setCurrencyAmount] = useState(1);
    const [conversionResult, setConversionResult] = useState("");
    const [baseCurrency, setBaseCurrency] = useState("");
    const [targetCurrency, setTargetCurrency] = useState("");

    async function requestApi() {
        if (baseCurrency == targetCurrency) {
            setConversionResult((1 * parseFloat(currencyAmount)).toFixed(2));
        } else {
            const params = {
                q: `${targetCurrency}_${baseCurrency}`,
                compact: "ultra",
                apiKey: API_KEY,
            };

            const { data } = await api.get(API_ROUTE, { params }).then();

            const apiConversionResult = Object.values(data)[0];

            await setConversionResult(
                (apiConversionResult * parseFloat(currencyAmount)).toFixed(2)
            );
        }
    }

    return (
        <View style={styles.container}>
            <Text>CONVERT MONEAY</Text>
            <TextInput
                placeholder="Informe a quantia:"
                keyboardType="decimal-pad"
                onChangeText={(value) => setCurrencyAmount(value)}
            />

            <MoneyPicker setProps={setBaseCurrency} value={baseCurrency} />
            <MoneyPicker setProps={setTargetCurrency} value={targetCurrency} />

            <TouchableOpacity
                style={styles.button}
                onPress={() => requestApi()}
            >
                <Text>Converter</Text>
            </TouchableOpacity>
            <Text>
                <Text>Resultado: {conversionResult} </Text>
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
