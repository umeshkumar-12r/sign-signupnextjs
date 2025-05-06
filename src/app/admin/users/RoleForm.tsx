"use client";

import { useState } from "react";

export default function RoleForm({ userId, currentRole }: { userId: string, currentRole: string }) {
  const [role, setRole] = useState(currentRole);

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newRole = e.target.value;
    setRole(newRole);

    await fetch("/api/admin/change-role", {
      method: "POST",
      body: JSON.stringify({ userId, role: newRole }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <select value={role} onChange={handleChange} className="bg-blue-400 border p-1 rounded">
      <option value="USER">User</option>
      <option value="MODERATOR">Moderator</option>
      <option value="ADMIN">Admin</option>
    </select>
  );
}
