// app/home.tsx
import { ScrollView } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const upcomingSessions = [
    { id: 1, coach: "Ayşe Yılmaz", date: "21 Nisan, 14:00" },
    { id: 2, coach: "Murat Demir", date: "23 Nisan, 11:00" },
  ];

  return (
    <ScrollView style={{ padding: 20 }}>
      <Title style={{ marginBottom: 10 }}>Yaklaşan Seanslar</Title>
      {upcomingSessions.map((session) => (
        <Card key={session.id} style={{ marginBottom: 15 }}>
          <Card.Content>
            <Title>{session.coach}</Title>
            <Paragraph>{session.date}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => router.push("/coach-profile")}>
              Koç Profili
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}
