import { useSelector } from 'react-redux'
import { selectCartCount } from './CartSlice.jsx'

function Header() {
  const cartCount = useSelector(selectCartCount)

  return (
    <header className="site-header">
      <a className="site-brand" href="#/" aria-label="Paradise Nursery home">
        <span className="brand-mark" aria-hidden="true">✳</span>
        <span>Paradise <span className="brand-light">Nursery</span></span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#/">Home</a>
        <a href="#/plants">Plants</a>
        <a className="cart-link" href="#/cart" aria-label={`Cart, ${cartCount} items`}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.5L20 8H6" />
            <circle cx="10" cy="19" r="1.3" />
            <circle cx="17" cy="19" r="1.3" />
          </svg>
          <span className="cart-count">{cartCount}</span>
        </a>
      </nav>
    </header>
  )
}

export default Header
