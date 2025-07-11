import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FlightSearch from './Components/FlightSearch'
import NotFoundPage from './Components/NotFoundPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookingForm from './Components/BookingForm.jsx'


const router = createBrowserRouter([
  {path: '/', element:   <App />},
  {path: '/booking', element: <FlightSearch />},
  {path: '/booking-form', element: <BookingForm />},
  {path: '*', element: <NotFoundPage />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router = {router} />
  </StrictMode>,
)
