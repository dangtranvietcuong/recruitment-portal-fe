import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Search, 
  Briefcase, 
  Users, 
  Building, 
  TrendingUp,
  MapPin,
  Filter,
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Award,
  Globe,
  Clock,
  DollarSign
} from 'lucide-react'

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Searching for:', searchQuery, 'in', location)
  }

  const stats = [
    { number: '10,000+', label: 'Active Jobs', icon: Briefcase },
    { number: '5,000+', label: 'Companies', icon: Building },
    { number: '50,000+', label: 'Job Seekers', icon: Users },
    { number: '95%', label: 'Success Rate', icon: TrendingUp },
  ]

  const features = [
    {
      icon: Zap,
      title: 'Quick Apply',
      description: 'Apply to jobs with just one click using your saved profile and resume.',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Shield,
      title: 'Verified Companies',
      description: 'All companies are verified to ensure legitimate job opportunities.',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Award,
      title: 'Career Growth',
      description: 'Get personalized job recommendations based on your skills and experience.',
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: Globe,
      title: 'Remote Friendly',
      description: 'Find remote, hybrid, and on-site opportunities from around the world.',
      color: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Get instant notifications about your application status and new opportunities.',
      color: 'text-cyan-600 dark:text-cyan-400'
    },
    {
      icon: DollarSign,
      title: 'Salary Insights',
      description: 'Access salary ranges and compensation data to make informed decisions.',
      color: 'text-emerald-600 dark:text-emerald-400'
    },
  ]

  const jobCategories = [
    { name: 'Technology', count: '2,500+', color: 'bg-blue-500' },
    { name: 'Marketing', count: '1,200+', color: 'bg-green-500' },
    { name: 'Design', count: '800+', color: 'bg-purple-500' },
    { name: 'Sales', count: '1,500+', color: 'bg-orange-500' },
    { name: 'Finance', count: '900+', color: 'bg-cyan-500' },
    { name: 'Healthcare', count: '600+', color: 'bg-red-500' },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'TechCorp',
      content: 'Found my dream job in just 2 weeks! The platform made it so easy to connect with great companies.',
      avatar: '👩‍💻'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'InnovateCo',
      content: 'The personalized job recommendations were spot-on. Landed a role that perfectly matches my skills.',
      avatar: '👨‍💼'
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      company: 'DesignStudio',
      content: 'Amazing platform! The one-click apply feature saved me so much time during my job search.',
      avatar: '👩‍🎨'
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-black/[0.02]" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 animate-in slide-in-from-top-4">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 50,000+ professionals
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in slide-in-from-bottom-4 animation-delay-100">
              Find Your{' '}
              <span className="text-gradient">Dream Job</span>
              <br />
              Today
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-in slide-in-from-bottom-4 animation-delay-200">
              Discover thousands of opportunities from top companies. 
              Apply easily and land your perfect role.
            </p>
            
            {/* Enhanced Search Bar */}
            <form onSubmit={handleSearch} className="max-w-4xl mx-auto animate-in slide-in-from-bottom-4 animation-delay-300">
              <Card className="p-2 shadow-strong">
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Job title, skills, or company..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 h-14 text-lg border-0 focus-visible:ring-0"
                    />
                  </div>
                  
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="City, state, or remote"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-12 h-14 text-lg border-0 focus-visible:ring-0"
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="lg" className="h-14 px-6">
                      <Filter className="h-5 w-5" />
                    </Button>
                    <Button type="submit" size="lg" className="h-14 px-8 btn-shine">
                      <Search className="mr-2 h-5 w-5" />
                      Search Jobs
                    </Button>
                  </div>
                </div>
              </Card>
            </form>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 animate-in slide-in-from-bottom-4 animation-delay-500">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors duration-200">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find opportunities in your field of expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {jobCategories.map((category, index) => (
              <Card key={category.name} className="card-hover cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`} />
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} jobs</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose RecruitPortal?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive solutions for both job seekers and employers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="card-hover group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from professionals who found their dream jobs through our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="card-hover">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who have already found their perfect match.
            Your dream job is just one click away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="btn-shine" asChild>
              <Link to={ROUTES.REGISTER}>
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to={ROUTES.JOBS || '/'}>
                Browse Jobs
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center space-x-8 opacity-80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">Free to use</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span className="text-sm">Trusted by 50K+</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
