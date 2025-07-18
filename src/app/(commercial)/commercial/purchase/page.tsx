"use client"

import { Sidebar } from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"
import { SidebarInset } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MdShoppingCart } from "react-icons/md"

function PlaceholderComponent({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <MdShoppingCart className="text-2xl text-purple-600" />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h1>
      </div>
      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-700">Coming Soon</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">This module is currently under development and will be available soon.</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default function CommercialPurchasePage() {
  return (
    <>
      <Sidebar />
      <SidebarInset>
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-white to-gray-50 p-2.5 sm:p-3 md:p-4">
          <div className="max-w-6xl mx-auto w-full">
            <PlaceholderComponent 
              title="Purchase Management" 
              description="Manage your purchase orders, suppliers, and procurement processes"
            />
          </div>
        </main>
      </SidebarInset>
    </>
  )
}