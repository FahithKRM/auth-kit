import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 transition-shadow hover:shadow-xl">
        <h1 className="text-5xl font-bold mb-4 text-blue-800">Dashboard</h1>
        <p className="text-gray-600 mb-6">
          Welcome back, {session.user?.name}!
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
            User Information
          </h3>
          <p className="text-blue-800">Email: {session.user?.email}</p>
          <p className="text-blue-800">Name: {session.user?.name}</p>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <p className="text-sm text-gray-600">
            This is a protected page. Only authenticated users can see this
            content.
          </p>
        </div>
      </div>
    </div>
  );
}