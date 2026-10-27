import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from './ProductList.jsx'
import {
  removeItem,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
  updateQuantity,
} from './CartSlice.jsx'

function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const count = useSelector(selectCartCount)
  const total = useSelector(selectCartTotal)

  const calculateTotalAmount = () => total.toFixed(2)
  const calculateTotalCost = (item) => (item.cost * item.quantity).toFixed(2)

  const handleContinueShopping = (e) => {
    e.preventDefault()
    window.location.hash = '#/plants'
  }

  const handleCheckoutShopping = (e) => {
    e.preventDefault()
    window.alert('Coming Soon')
  }

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))
  }

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))
    } else {
      dispatch(removeItem(item.name))
    }
  }

  const handleRemove = (item) => {
    dispatch(removeItem(item.name))
  }

  return (
    <>
    <Navbar />
    <main className="page-shell cart-page cart-container">
      <section className="cart-heading">
        <div>
          <p className="eyebrow">YOUR LITTLE PARADISE</p>
          <h1>Shopping cart</h1>
        </div>
        <p className="cart-plant-count">{count} {count === 1 ? 'plant' : 'plants'}</p>
      </section>

      {items.length === 0 ? (
        <section className="empty-cart">
          <span className="empty-cart-icon" aria-hidden="true">✳</span>
          <h2>Your cart is ready to grow.</h2>
          <p>Pick a plant (or a few) and we’ll keep them right here.</p>
          <button className="button button-dark get-started-button" type="button" onClick={handleContinueShopping}>
            Browse plants <span aria-hidden="true">→</span>
          </button>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Items in your cart">
            {items.map((item) => (
              <article className="cart-item" key={item.name}>
                <img
                  className="cart-item-image"
                  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=360&q=80`}
                  alt={item.name}
                />
                <div className="cart-item-info">
                  <p className="eyebrow">PARADISE NURSERY</p>
                  <h2>{item.name}</h2>
                  <p className="unit-price">${item.cost.toFixed(2)} <span>each</span></p>
                  <button
                    className="remove-button cart-item-delete"
                    type="button"
                    onClick={() => handleRemove(item)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                    <button
                      type="button"
                      onClick={() => handleDecrement(item)}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>
                    <span aria-live="polite">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => handleIncrement(item)}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>
                  <p className="line-total">${calculateTotalCost(item)}</p>
                </div>
              </article>
            ))}
          </section>
          <aside className="order-summary">
            <p className="eyebrow">A GOOD CHOICE</p>
            <h2>Order summary</h2>
            <div className="summary-row">
              <span>Plants ({count})</span>
              <span>${calculateTotalAmount()}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span className="free-delivery">On us</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <strong>${calculateTotalAmount()}</strong>
            </div>
            <button
              className="button button-dark checkout-button"
              type="button"
              onClick={handleCheckoutShopping}
            >
              Continue to checkout <span aria-hidden="true">→</span>
            </button>
            <button className="continue-link get-started-button" type="button" onClick={handleContinueShopping}>
              ← Continue Shopping
            </button>
          </aside>
        </div>
      )}
    </main>
    </>
  )
}

export default CartItem
