import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string;
      email?: string;
      image?: string;
      id: string;
      role: "USER" | "MODERATOR" | "ADMIN";
    };
  }

  interface User {
    id: string;
    role: "USER" | "MODERATOR" | "ADMIN";
  }
}
