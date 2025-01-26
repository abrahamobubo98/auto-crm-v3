import { Button } from '@/components/ui/button'
import { ArrowRight, LayoutDashboard, Users, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                TaskMatic
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">About</Button>
              <Link href="/auth">
                <Button className="bg-blue-600 hover:bg-blue-700">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Manage Tasks and Projects with Ease
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              TaskMatic is your all-in-one solution for managing customer complaints, work tasks, and projects in a modern, intuitive interface.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/auth?tab=signup">
                <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  Get Started
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Button variant="outline" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need in One Place</h2>
            <p className="text-gray-400">Powerful features to boost your productivity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<LayoutDashboard className="w-8 h-8 text-blue-500" />}
              title="Intuitive Dashboard"
              description="Get a clear overview of all your tasks and projects at a glance"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-purple-500" />}
              title="Team Collaboration"
              description="Work seamlessly with your team members in real-time"
            />
            <FeatureCard
              icon={<MessageSquare className="w-8 h-8 text-green-500" />}
              title="Customer Support"
              description="Handle customer complaints efficiently with integrated messaging"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of teams already using TaskMatic</p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
