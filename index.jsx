import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Link } from "expo-router";
import { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    useColorScheme,
} from "react-native";
export default function Index() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark"

    const colors = {
        background: isDark ? "#121212" : "#FDFDFD",
        textPrimary: isDark ? "#FFFFFF" : "#000000",
        textSecondary: isDark ? "#A0A0A0" : "#666666",
        link: isDark ? "#4D6BFF" : "#0A1172",
    };

    function handleSignIn() {
        if (!email.trim() || !password.strim()) {
            return Alert.alert("Entrar", "Preencha e-mail e senha para enttrar");
        }

    }
    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: colors.background }}
            behavior={Platform.select({ ios: "padding", android: "height" })}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled" import {Button} from "@/components/button";

            >
            <View style={styles.container}>
                <Image
                    source={require("../assets/castaldi.png")}
                    style={styles.illustration}
                    resizeMode="contain"
                />

                <Text style={[styles.title, { color: colors.textPrimary }]}>
                    Programação Mobile.
                </Text>

                <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
                    Acesse sua conta
                </Text>

                <View style={styles.form}>
                    <Input
                        placeholder="E-mail"
                        keyboardType="email-address"
                        onChangeText={setEmail}
                    />

                    <Input
                        placeholder="Senha"
                        secureTextEntry
                        onChangeText={setPassword}
                    />
                    <Button label="Entrar" onPress={handleSignIn} />
                </View>
                <Text style={[styles.footerText, { color: colors.textSecondary }]}>
                    Não tem uma conta?{" "}
                    <Link
                        href="/signup"
                        style={[styles.footerLink, { color: colors.link }]}
                    >
                        Cadastre-se aqui.
                    </Link>
                </Text>
            </View>
        </ScrollView>
        </KeyboardAvoidingView >
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
        width: "80%",
    },

    illustration: {
        width: "25%",
        height: 300,
        marginBottom: 20,
    },

    footerText: {
        textAlign: "center",
        marginTop: 24,
    },
    footerLink: {
        fontWeight: 700,
    },
});