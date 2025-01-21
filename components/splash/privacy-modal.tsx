"use client"

import { X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface PrivacyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Privacy Policy</DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-2">1. Information We Collect</h3>
              <p className="text-sm text-gray-600">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Tour and gig management data</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">2. How We Use Your Information</h3>
              <p className="text-sm text-gray-600">We use the collected information to:</p>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                <li>Provide and maintain our services</li>
                <li>Process your transactions</li>
                <li>Send you service-related communications</li>
                <li>Improve our services</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">3. Information Sharing</h3>
              <p className="text-sm text-gray-600">
                We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-2">4. Data Security</h3>
              <p className="text-sm text-gray-600">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">5. Your Rights</h3>
              <p className="text-sm text-gray-600">You have the right to:</p>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">6. Contact Us</h3>
              <p className="text-sm text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:info@bandpracticecrm.com" className="text-blue-600 hover:underline">
                  info@bandpracticecrm.com
                </a>
              </p>
            </section>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">Last updated: January 21, 2025</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 