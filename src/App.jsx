import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from './components/ScrollToTop.jsx';
import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <>
      <Pages />
      <Toaster />
      <Analytics />
      <ScrollToTop />
    </>
  )
}

export default App 