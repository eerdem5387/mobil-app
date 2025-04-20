// app/login.tsx
import { View } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Title style={{ textAlign: "center", marginBottom: 20 }}>
        Koçluk Giriş
      </Title>
      <TextInput
        label="E-posta"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 20 }}
      />
      <Button mode="contained" onPress={() => router.push("/home")}>
        Giriş Yap
      </Button>
    </View>
  );
}
