import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        console.log("ATUALIZOU" + Date.now());
        requestApi()
    }, [baseCurrency, targetCurrency]);

    async function requestApi() {
        if (baseCurrency == targetCurrency) {
            setConversionResult((1 * parseFloat(currencyAmount)).toFixed(2));
        } else {
            const params = {
                q: `${baseCurrency}_${targetCurrency}`,
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
            <Text style={styles.title}>Conversão de Moedas</Text>
            <TextInput
                placeholder="Informe a quantia:"
                keyboardType="decimal-pad"
                onChangeText={(value) => setCurrencyAmount(value)}
                style={styles.input}
            />

            <MoneyPicker setProps={setBaseCurrency} value={baseCurrency} />
            <Text style={styles.title}>Convertido em...</Text>
            <MoneyPicker setProps={setTargetCurrency} value={targetCurrency} />

            <TouchableOpacity
                style={styles.button}
                onPress={() => requestApi()}
            >
                <Text style={styles.buttonText}> Converter</Text>
            </TouchableOpacity>
            <Text>
                <Text style={styles.result}>
                    Resultado:{" "}
                    {targetCurrency === "USD"
                        ? "U$"
                        : targetCurrency === "EUR"
                        ? "€"
                        : targetCurrency === "BRL"
                        ? "R$"
                        : "$"}{" "}
                    {conversionResult.replace(".", ",")}{" "}
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
        backgroundColor: "#172121",
    },
    button: {
        backgroundColor: "#03bd42",
        borderRadius: 30,
        width: 200,
        height: 40,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
    },
    result: {
        marginTop: 60,
        fontWeight: "bold",
        fontSize: 16,
        color: "#FFF",
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFF",
    },
    input: {
        marginTop: 15,
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#333",
        alignContent: "center",
        color: "#FFF",
        backgroundColor: "#2bc016",
        width: 240,
        fontSize: 20,
    },
});
