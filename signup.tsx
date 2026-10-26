import { Text, View } from "react-native";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Link } from "expo-router";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    useColorScheme
} from "react-native";

export default function Signup() {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark"

    const colors = {
        background: isDark ? "#121212" : "#FDFDFD",
        textPrimary: isDark ? "#FFFFFF" : "#000000",
        textSecondary: isDark ? "#A0A0A0" : "#666666",
        link: isDark ? "#4D6BFF" : "#0A1172",
    };
    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: colors.background }}
            behavior={Platform.select({ ios: "padding", android: "height" })}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >

                <View
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                >
                    <Image
                        source={require("../assets/castaldi.png")}
                        style={styles.illustration}
                    />
                    <Text style={[styles.title, { color: colors.textPrimary }]}>
                        Programação Mobile.
                    </Text>
                    <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
                        Acesse sua conta
                    </Text>

                    <View style={styles.form}>
                        <Input placeholder="Nome" />
                        <Input placeholder="E-mail" keyboardType="email-address" />
                        <Input placeholder="Senha" secureTextEntry />
                        <Input placeholder="Confirmar senha" secureTextEntry />
                        <Button label="Cadastrar" />
                    </View>

                    <Text style={styles.footerText}>
                        Já tem uma conta ?{" "}
                        <Link href="/" style={styles.footerLink}>
                            Entre aqui.
                        </Link>
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 18,
    },

    form: {
        marginTop: 30,
        gap: 24,
    },
    illustration: {
        width: "15%",
        height: 100,
    },
    footerText: {
        textAlign: "center",
        marginTop: 24,

    },
    footerLink: {

        fontWeight: 700,
    },
});