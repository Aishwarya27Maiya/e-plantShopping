import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import AboutUs from './AboutUs.jsx'
import CartItem from './CartItem.jsx'
import Header from './Header.jsx'
import ProductList from './ProductList.jsx'
import { store } from './store.js'
import './App.css'

function AppContent() {
  const [route, setRoute] = useState(window.location.hash || '#/')

  useEffect(() => {
    const updateRoute = () => setRoute(window.location.hash || '#/')
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  if (route === '#/plants') {
    return (
      <>
        <Header />
        <ProductList />
      </>
    )
  }

  if (route === '#/cart') {
    return (
      <>
        <Header />
        <CartItem />
      </>
    )
  }

  return <AboutUs />
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App
