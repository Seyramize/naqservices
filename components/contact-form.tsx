"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { submitContactForm } from "@/lib/actions"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = {
  name?: string[]
  email?: string[]
  subject?: string[]
  message?: string[]
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  }>({})
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({})

    try {
      const result = await submitContactForm(formState)

      if (result.success) {
        setFormStatus({
          success: true,
          message: result.message,
        })
        // Reset form on success
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setErrors({})
      } else {
        setFormStatus({
          success: false,
          message: result.message,
        })
        // Set validation errors if any
        if (result.errors) {
          setErrors(result.errors)
        }
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {formStatus.message && (
        <div
          className={`p-4 rounded-xl ${
            formStatus.success
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          } flex items-start`}
        >
          {formStatus.success ? (
            <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          )}
          <span>{formStatus.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={`w-full px-5 py-4 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg`}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name[0]}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className={`w-full px-5 py-4 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg`}
            placeholder="Your email"
          />
          {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email[0]}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-base font-medium text-gray-700 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          className={`w-full px-5 py-4 border ${
            errors.subject ? "border-red-500" : "border-gray-300"
          } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg`}
          placeholder="Subject"
        />
        {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject[0]}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-5 py-4 border ${
            errors.message ? "border-red-500" : "border-gray-300"
          } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg`}
          placeholder="Your message"
        ></textarea>
        {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message[0]}</p>}
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 rounded-xl transform hover:scale-[1.02] hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:transform-none"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
