"use client";

import { useState } from "react";

export default function DeleteButton({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirmed = confirm("Are you sure you want to delete this user?");
    if (!confirmed) return;

    setLoading(true);

    const res = await fetch("/api/admin/delete-user", {
      method: "POST",
      body: JSON.stringify({ userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setLoading(false);
    if (res.ok) {
      window.location.reload();
    } else {
      alert("Failed to delete user.");
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}
