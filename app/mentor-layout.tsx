import { Tabs } from "expo-router";

export default function MentorLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(mentor)/dashboard" options={{ title: "Ana Sayfa" }} />
      <Tabs.Screen
        name="(mentor)/students"
        options={{ title: "Öğrencilerim" }}
      />
      <Tabs.Screen name="(mentor)/schedule" options={{ title: "Takvim" }} />
      <Tabs.Screen name="(mentor)/chats" options={{ title: "Mesajlar" }} />
      <Tabs.Screen name="(mentor)/profile" options={{ title: "Profil" }} />
    </Tabs>
  );
}
