"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Clock, Heart, ExternalLink } from "lucide-react"

export default function EngagementPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  // Engagement date: October 25, 2025 at 5:00 PM IST
  const engagementDate = new Date("2025-10-25T17:00:00+05:30")

  useEffect(() => {
    // Loading animation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = engagementDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => {
      clearTimeout(loadingTimer)
      clearInterval(timer)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="animate-bounce">
              <svg className="w-16 h-16 mx-auto text-rose-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div className="absolute -top-2 -right-2 animate-pulse">
              <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>
          <div className="text-2xl font-serif text-rose-600 mb-4 animate-pulse">Loading something beautiful...</div>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Floating Hearts Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            <Heart className="w-4 h-4 text-rose-300 opacity-60" fill="currentColor" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="mb-6">
            <svg className="w-20 h-20 mx-auto text-rose-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-rose-600 mb-4 text-balance">Athina & Shinku</h1>
          <p className="text-xl md:text-2xl text-rose-500 font-light mb-2">are getting engaged!</p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* Countdown Timer */}
        <Card className="max-w-4xl mx-auto mb-12 p-8 bg-white/80 backdrop-blur-sm border-rose-200 shadow-xl animate-slide-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-rose-600 mb-2">Countdown to Our Special Day</h2>
            <p className="text-rose-500">October 25, 2025 • 5:00 PM</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={item.label} className="animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gradient-to-br from-rose-400 to-pink-500 text-white rounded-lg p-4 shadow-lg">
                  <div className="text-3xl md:text-4xl font-bold">{item.value}</div>
                  <div className="text-sm uppercase tracking-wide">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Event Details */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Date & Time */}
          <Card
            className="p-8 bg-white/80 backdrop-blur-sm border-rose-200 shadow-xl animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-center">
              <Calendar className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-2xl font-serif text-rose-600 mb-4">When</h3>
              <div className="space-y-2 text-gray-700">
                <p className="text-xl font-semibold">October 22, 2025</p>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-rose-400" />
                  <p className="text-lg">5:00 PM</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Location */}
          <Card
            className="p-8 bg-white/80 backdrop-blur-sm border-rose-200 shadow-xl animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center">
              <MapPin className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-2xl font-serif text-rose-600 mb-4">Where</h3>
              <div className="space-y-2 text-gray-700">
                <p className="text-lg font-semibold">St. Gregorious Knanaya Church</p>
                <p className="text-sm">West Othera, Pathanamthitta</p>
                <p className="text-sm">Othera, Otherawest</p>
                <p className="text-sm">Kerala, India - 689551</p>
                <Button asChild className="mt-4 bg-rose-500 hover:bg-rose-600 text-white">
                  <a
                    href="https://maps.app.goo.gl/aFuATgJZoqd1Cez39"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Message */}
        <Card
          className="max-w-4xl mx-auto mt-12 p-8 bg-white/80 backdrop-blur-sm border-rose-200 shadow-xl text-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="mb-6">
            <svg className="w-16 h-16 mx-auto text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 className="text-3xl font-serif text-rose-600 mb-4">Join Us in Celebration</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-balance">
            We are thrilled to share this joyous moment with our beloved family and friends. Your presence would make
            our special day even more meaningful as we begin this beautiful journey together.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-6 h-6 text-rose-400 animate-pulse"
                  fill="currentColor"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-rose-500 font-light">
            Made with ❤️ by{" "}
            <a
              href="https://linkedin.com/in/godly-k-mathews"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 font-medium inline-flex items-center gap-1"
            >
              Godly K Mathews
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
