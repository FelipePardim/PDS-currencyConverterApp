import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { Picker } from "@react-native-picker/picker";

// Flags
import brazil from "../../assets/brazil.png";
import eu from "../../assets/eu.png";
import usa from "../../assets/usa.png";
import notFound from "../../assets/notFound.png";

// Currencies JSON
import currencies from "../Services/Currencies.json";

export function MoneyPicker({ setProps, value }) {
    return (
        <View style={styles.container}>
            {/* Add flag's */}
            {value === "USD" ? (
                <Image style={styles.countryFlag} source={usa} />
            ) : value === "EUR" ? (
                <Image style={styles.countryFlag} source={eu} />
            ) : value === "BRL" ? (
                <Image style={styles.countryFlag} source={brazil} />
            ) : (
                <Image style={styles.countryFlag} source={notFound} />
            )}
            <Picker
                style={styles.Picker}
                selectedValue={value}
                onValueChange={(itemValue, itemIndex) => setProps(itemValue)}
            >
                {Object.entries(currencies).map(([item, index]) => {
                    return (
                        <Picker.Item label={index} value={item} key={index} />
                    );
                })}
            </Picker>
            <Text style={styles.text}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#aad576",
        flexDirection: "row",
        width: "90%",
        margin: 5,
        padding: 5,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 15
    },
    countryFlag: {
        width: 60,
        height: 60,
    },
    Picker: {
        width: 200,
        height: 100,
        marginLeft: 15
    },
    text: {
        fontWeight: 'bold',
        marginRight: 15
    }
});
