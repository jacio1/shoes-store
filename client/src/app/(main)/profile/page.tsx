'use client'

import { useState } from "react";
import Unauthorized from "./_components/Unathorized";

export default function ProfilePage() {
  const [session, setSession] = useState(false);

  if (!session) return <Unauthorized/>

  return (
    <div>
      <h1>Страница профиля</h1>
    </div>
  );
}
