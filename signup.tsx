import { Text, View } from "react-native";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Link } from "expo-router";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet
} from "react-native";

export default function Signup() {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
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
                        source={require("/home/alunos/my-app/src/assets/castaldi.png")}
                        style={styles.illustration}
                    />
                    <Text style={styles.title}>Cadastrar</Text>
                    <Text style={styles.subtitle}>Crie sua conta.</Text>
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
        backgroundColor: "#FDFDFD",
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
        color: "#000000",
    },
    footerLink: {
        color: "#0A1172",
        fontWeight: 700,
    },
});