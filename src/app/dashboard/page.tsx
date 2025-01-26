'use client'

import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/auth')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            TaskMatic Dashboard
          </h1>
          <Button 
            onClick={handleSignOut}
            variant="outline" 
            className="border-gray-700 hover:bg-gray-800"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Successfully Logged In! 🎉</h2>
          <p className="text-gray-400">
            Welcome to your dashboard. More features coming soon!
          </p>
        </div>
      </div>
    </div>
  )
} 