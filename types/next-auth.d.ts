// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    role: "USER" | "MODERATOR" | "ADMIN";
  }

  interface Session {
    user: {
      id: string;
      name?: string;
      email?: string;
      image?: string;
      role: "USER" | "MODERATOR" | "ADMIN";
    };
  }
}
