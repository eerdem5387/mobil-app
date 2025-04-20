// app/index.tsx
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Navigasyonu bir sonraki olay döngüsünde çalıştır
    setTimeout(() => {
      router.replace("/student-layout");
    }, 0);
  }, []);

  return null;
}
