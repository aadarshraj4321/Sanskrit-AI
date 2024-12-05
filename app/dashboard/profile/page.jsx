"use client";

import { useEffect, useState } from "react";
import { useUser, RedirectToSignIn, useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import LeftSideBar from "../components/LeftSideBar";
import Image from "next/image"; // Importing Image component from Next.js

// Sidebar items with icons, labels, and links
const sidebarItems = [
  { label: "Learn", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/learn.gif", link: "/dashboard/learning" },
  { label: "Story", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/story.gif", link: "/dashboard/story" },
  { label: "Gita", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/gita.gif", link: "/dashboard/gita" },
  { label: "Profile", icon: "https://d8q326uv7ym5m.cloudfront.net/public/dashboard_landing/profile.gif", link: "/dashboard/profile" }
];

export default function ProfilePage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut } = useClerk(); // Use Clerk's signOut function
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const fetchUserProfile = async () => {
        try {
          const response = await fetch(`/api/user-profile?clerkUserId=${user.id}`);
          const data = await response.json();
          setProfile(data);
        } catch (error) {
          console.error("Error fetching user profile:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchUserProfile();
    }
  }, [isLoaded, isSignedIn, user]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white text-white flex items-center justify-center">
        <Image
          src="https://d8q326uv7ym5m.cloudfront.net/public/loading.gif" // Path to your loading GIF
          alt="flaticon..."
          width={100}  // Adjust width as needed
          height={100} // Adjust height as needed
        />
      </div>
    );
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <Image
          src="https://d8q326uv7ym5m.cloudfront.net/public/loading.gif" // Path to your loading GIF
          alt="Loading profile..."
          width={100}  // Adjust width as needed
          height={100} // Adjust height as needed
        />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-1/4">
        <LeftSideBar sidebarItems={sidebarItems} />
      </div>

      {/* Profile Content */}
      <div className="flex-grow p-8">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="flex items-center justify-between mb-8">
            {profile.imageUrl && (
              <img
                src={profile.imageUrl}
                alt="Profile Picture"
                className="rounded-full w-32 h-32 border-4 border-indigo-500 shadow-lg"
              />
            )}
            <div className="ml-6 flex-grow">
              <h1 className="text-3xl font-semibold text-gray-800">{profile.name || "User"}</h1>
            </div>
          </div>

          {/* User Info Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Email ID</h3>
              <p className="text-gray-600">{profile.email}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Joined At</h3>
              <p className="text-gray-600">
                {new Date(profile.joinedAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <div className="flex justify-center">
            <button
              className="w-full max-w-xs bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
