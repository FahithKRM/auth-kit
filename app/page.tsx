import Link from "next/link";
import { RocketLaunchIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <h1 className="text-5xl font-bold mb-8 text-center bg-linear-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
        AuthKit: Next.js Auth Starter
      </h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
        Full-stack authentication system with Next.js, MongoDB, and NextAuth.
        Ready to build your SaaS application.
      </p>
      <div className="flex gap-4">
        <Link
          href="/register"
          className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-medium flex items-center"
        >
          <RocketLaunchIcon className="w-5 h-5 mr-2" />
          Get Started
        </Link>
        <Link
          href="/login"
          className="bg-gray-200 text-gray-900 px-8 py-3 rounded-md hover:bg-gray-300 transition-colors text-lg font-medium flex items-center justify-center gap-1"
        >
          {" "}
          <ArrowRightIcon className="w-5 h-5 mr-2" />
          Login
        </Link>
      </div>
    </div>
  );
}
