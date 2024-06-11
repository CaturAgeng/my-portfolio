'use client'

import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider><Navbar />{children}<Footer /></ChakraProvider>
}