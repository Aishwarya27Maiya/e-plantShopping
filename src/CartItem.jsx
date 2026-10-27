import { useDispatch, useSelector } from 'react-redux'
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from './CartSlice.jsx'

function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const count = useSelector(selectCartCount)
  const total = useSelector(selectCartTotal)

  return (
    <main className="page-shell cart-page">
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
          <a className="button button-dark" href="#/plants">Browse plants <span aria-hidden="true">→</span></a>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Items in your cart">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img
                  className="cart-item-image"
                  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=360&q=80`}
                  alt={item.name}
                />
                <div className="cart-item-info">
                  <p className="eyebrow">PARADISE NURSERY</p>
                  <h2>{item.name}</h2>
                  <p className="unit-price">${item.price.toFixed(2)} <span>each</span></p>
                  <button
                    className="remove-button"
                    type="button"
                    onClick={() => dispatch(removeFromCart(item.id))}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                    <button
                      type="button"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>
                    <span aria-live="polite">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>
                  <p className="line-total">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </article>
            ))}
          </section>
          <aside className="order-summary">
            <p className="eyebrow">A GOOD CHOICE</p>
            <h2>Order summary</h2>
            <div className="summary-row">
              <span>Plants ({count})</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span className="free-delivery">On us</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <button
              className="button button-dark checkout-button"
              type="button"
              onClick={() => window.alert('Coming soon! Your plants are looking forward to meeting you.')}
            >
              Continue to checkout <span aria-hidden="true">→</span>
            </button>
            <a className="continue-link" href="#/plants">← Continue shopping</a>
          </aside>
        </div>
      )}
    </main>
  )
}

export default CartItem
