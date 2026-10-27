import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import AboutUs from './AboutUs.jsx'
import CartItem from './CartItem.jsx'
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

  const handleGetStartedClick = () => {
    window.location.hash = '#/plants'
  }

  if (route === '#/plants') {
    return (
      <ProductList />
    )
  }

  if (route === '#/cart') {
    return (
      <CartItem />
    )
  }

  return (
    <main className="landing">
      <div className="landing-shade" />
      <section className="landing-content" aria-labelledby="landing-title">
        <div className="landing-brand">
          <span className="brand-mark" aria-hidden="true">✳</span>
          Paradise Nursery
        </div>
        <h1 id="landing-title">Welcome to Paradise Nursery</h1>
        <p className="eyebrow">Where green meets serenity</p>
        <button
          className="button button-light landing-cta get-started-button"
          type="button"
          onClick={handleGetStartedClick}
        >
          Get Started <span aria-hidden="true">→</span>
        </button>
        <AboutUs />
      </section>
      <div className="landing-credit">GROW A LITTLE PARADISE</div>
    </main>
  )
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App
