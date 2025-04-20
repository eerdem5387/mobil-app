// app/coach-profile.tsx
import { View } from "react-native";
import { Title, Paragraph, Button, Card } from "react-native-paper";

export default function CoachProfileScreen() {
  return (
    <Card style={{ margin: 20, padding: 10 }}>
      <Card.Content>
        <Title>Ayşe Yılmaz</Title>
        <Paragraph>Yaşam Koçu | 5 Yıl Deneyim</Paragraph>
        <Paragraph style={{ marginTop: 10 }}>
          Uzmanlık alanı stres yönetimi, kariyer planlaması ve kişisel
          gelişimdir.
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained">Görüşme Talep Et</Button>
      </Card.Actions>
    </Card>
  );
}
