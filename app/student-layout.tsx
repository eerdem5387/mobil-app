import { Tabs } from "expo-router";

export default function StudentLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(student)/home" options={{ title: "Ana Sayfa" }} />
      <Tabs.Screen name="(student)/mufredat" options={{ title: "Müfredat" }} />
      <Tabs.Screen name="(student)/calender" options={{ title: "Takvim" }} />
      <Tabs.Screen name="(student)/sessions" options={{ title: "Görevler" }} />
      <Tabs.Screen name="(student)/profile" options={{ title: "Profil" }} />
    </Tabs>
  );
}
