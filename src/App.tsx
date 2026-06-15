import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { SupportPage } from './pages/SupportPage'
import { PrivacyPage } from './pages/PrivacyPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SupportPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Route>
    </Routes>
  )
}
