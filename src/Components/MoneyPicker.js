import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { Picker } from "@react-native-picker/picker";

import img from "../../assets/icon.png";

export function MoneyPicker() {
    const [selectedCurrency, setSelectedCurrency] = useState("USD");

    return (
        <View style={styles.container}>
            <Image style={styles.countryFlag} source={img} />
            <Picker
                style={styles.Picker}
                selectedValue={selectedCurrency}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedCurrency(itemValue)
                }
            >
                <Picker.Item label="Dolar" value="USD" />
                <Picker.Item label="Real" value="BRL" />
            </Picker>
            <Text>{selectedCurrency}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",

        flexDirection: "row",
        width: "90%",
        margin: 5,
        padding: 5,
        justifyContent: "space-between",
        alignItems: "center",
    },
    countryFlag: {
        width: 60,
        height: 60,
    },
    Picker: {
        width: 200,
        height: 100,
    },
});
