import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import SignOutButton from "@/components/signoutbutton";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white px-4">
      <div className="bg-white text-gray-800 w-full max-w-2xl rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">Dashboard</h1>
        <p className="text-center text-lg">Welcome back, <span className="font-semibold">{session.user.email}</span>!</p>
        <p className="text-center mt-1 text-gray-700">
          You are logged in as <strong>{session.user.role}</strong>.
        </p>

        <div className="mt-6 text-center">
          {session.user.role === "MODERATOR" && (
            <>
              <p className="text-lg font-medium text-gray-800">Moderator Access</p>
              <Link
                href="/moderator"
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Go to Moderator Panel
              </Link>
            </>
          )}

          {session.user.role === "ADMIN" && (
            <>
              <p className="text-lg font-medium text-gray-800">Admin Access</p>
              <Link
                href="/admin/users"
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Go to Admin Panel
              </Link>
            </>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
