'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserCircle, Building2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { useState } from "react"

export default function RoleSelectPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleRoleSelect = async (role: 'customer' | 'staff') => {
    setIsLoading(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/auth')
        return
      }

      const { error } = await supabase.auth.updateUser({
        data: { role }
      })

      if (error) throw error
      
      router.push('/dashboard')
    } catch (error) {
      console.error('Error setting role:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Choose Your Role</h1>
          <p className="text-gray-400">Select how you'll be using TaskMatic</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Customer Role Card */}
          <Card 
            className="bg-gray-800 border-gray-700 hover:border-blue-500 cursor-pointer transition-all group"
            onClick={() => handleRoleSelect('customer')}
          >
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 text-blue-500 mb-4">
                <UserCircle size={24} />
              </div>
              <CardTitle className="text-white">Customer</CardTitle>
              <CardDescription className="text-gray-400">
                Submit and track support requests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  • Submit support tickets
                </li>
                <li className="flex items-center">
                  • Track request status
                </li>
                <li className="flex items-center">
                  • Communicate with support team
                </li>
              </ul>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-500"
                disabled={isLoading}
              >
                Continue as Customer
              </Button>
            </CardContent>
          </Card>

          {/* Staff Role Card */}
          <Card 
            className="bg-gray-800 border-gray-700 hover:border-purple-500 cursor-pointer transition-all group"
            onClick={() => handleRoleSelect('staff')}
          >
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/10 text-purple-500 mb-4">
                <Building2 size={24} />
              </div>
              <CardTitle className="text-white">Staff Member</CardTitle>
              <CardDescription className="text-gray-400">
                Manage tasks and support requests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  • Handle customer requests
                </li>
                <li className="flex items-center">
                  • Manage team tasks
                </li>
                <li className="flex items-center">
                  • Track project progress
                </li>
              </ul>
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700 group-hover:bg-purple-500"
                disabled={isLoading}
              >
                Continue as Staff
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            You can change your role later in settings
          </p>
        </div>
      </div>
    </div>
  )
} 