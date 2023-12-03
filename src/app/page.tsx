"use client";

import Link from "next/link";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Home() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENVIRONMENT !== "development") {
      const restartServer = async () => {
        await fetch(process.env.NEXT_PUBLIC_API_PROD!)
          .then(() => {})
          .catch((err) => {
            toast.error("Error, please try again");
          });
      };

      toast.promise(restartServer, {
        pending: "Please wait while we are restarting our servers",
        success: "Servers alive",
        error: "Error, please try again",
      });
    }
  }, []);

  return (
    <main>
      Home page
      <div className="mt-2 cursor-pointer">
        <Link href="/dashboard">Go to Dashboard</Link>
      </div>
    </main>
  );
}
