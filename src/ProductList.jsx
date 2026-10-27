import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectCartItems } from './CartSlice.jsx'

const categories = [
  {
    name: 'Easy-care favorites',
    description: 'Good things grow, even on your busiest days.',
    plants: [
      { id: 'snake-plant', name: 'Snake Plant', price: 24, image: 'photo-1545241047-6083a3684587', tag: 'LOW MAINTENANCE' },
      { id: 'zz-plant', name: 'ZZ Plant', price: 28, image: 'photo-1483794344563-d27a8d18014e', tag: 'LOW MAINTENANCE' },
      { id: 'pothos', name: 'Golden Pothos', price: 18, image: 'photo-1614594975525-e45190c55d0b', tag: 'TRAILING' },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 32, image: 'photo-1509423350716-97f9360b4e09', tag: 'STATEMENT' },
      { id: 'spider-plant', name: 'Spider Plant', price: 20, image: 'photo-1572688484438-313a6e50c333', tag: 'PET FRIENDLY' },
      { id: 'cast-iron', name: 'Cast Iron Plant', price: 36, image: 'photo-1485955900006-10f4d324d411', tag: 'LOW MAINTENANCE' },
    ],
  },
  {
    name: 'Little leafy things',
    description: 'Small wonders for shelves, desks, and sunny corners.',
    plants: [
      { id: 'peperomia', name: 'Peperomia', price: 22, image: 'photo-1501004318641-b39e6451bec6', tag: 'COMPACT' },
      { id: 'pilea', name: 'Pilea Peperomioides', price: 26, image: 'photo-1509423350716-97f9360b4e09', tag: 'PET FRIENDLY' },
      { id: 'calathea', name: 'Calathea Orbifolia', price: 34, image: 'photo-1463320726281-696a485928c7', tag: 'TROPICAL' },
      { id: 'parlor-palm', name: 'Parlor Palm', price: 29, image: 'photo-1512428813834-c702c7702b78', tag: 'PET FRIENDLY' },
      { id: 'bird-nest-fern', name: 'Bird’s Nest Fern', price: 27, image: 'photo-1509423350716-97f9360b4e09', tag: 'TROPICAL' },
      { id: 'chinese-evergreen', name: 'Chinese Evergreen', price: 31, image: 'photo-1485955900006-10f4d324d411', tag: 'LOW MAINTENANCE' },
    ],
  },
  {
    name: 'Sunshine seekers',
    description: 'For the bright spots and the sun-loving plant people.',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 42, image: 'photo-1614594975525-e45190c55d0b', tag: 'BESTSELLER' },
      { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', price: 58, image: 'photo-1509423350716-97f9360b4e09', tag: 'STATEMENT' },
      { id: 'bird-of-paradise', name: 'Bird of Paradise', price: 64, image: 'photo-1512428813834-c702c7702b78', tag: 'STATEMENT' },
      { id: 'aloe-vera', name: 'Aloe Vera', price: 19, image: 'photo-1501004318641-b39e6451bec6', tag: 'SUN LOVER' },
      { id: 'jade-plant', name: 'Jade Plant', price: 23, image: 'photo-1485955900006-10f4d324d411', tag: 'SUCCULENT' },
      { id: 'croton', name: 'Croton Petra', price: 35, image: 'photo-1572688484438-313a6e50c333', tag: 'COLORFUL' },
    ],
  },
]

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const cartIds = new Set(cartItems.map((item) => item.id))

  return (
    <main className="page-shell product-page">
      <section className="page-intro">
        <p className="eyebrow">THE HOUSEPLANT EDIT</p>
        <h1>Find your happy place.</h1>
        <p>Meet your new favorite leafy roommate. Every plant is picked with care and ready to grow with you.</p>
      </section>

      {categories.map((category, index) => (
        <section className="plant-category" key={category.name}>
          <div className="category-heading">
            <div className="category-number">0{index + 1}</div>
            <div>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>
          </div>
          <div className="plant-grid">
            {category.plants.map((plant) => {
              const added = cartIds.has(plant.id)

              return (
                <article className="plant-card" key={plant.id}>
                  <div className="plant-image-wrap">
                    <img
                      className="plant-image"
                      src={`https://images.unsplash.com/${plant.image}?auto=format&fit=crop&w=720&q=80`}
                      alt={plant.name}
                      loading="lazy"
                    />
                    <span className="plant-tag">{plant.tag}</span>
                  </div>
                  <div className="plant-details">
                    <h3>{plant.name}</h3>
                    <p className="plant-price">${plant.price.toFixed(2)}</p>
                    <button
                      className={`button add-button${added ? ' is-added' : ''}`}
                      type="button"
                      onClick={() => dispatch(addToCart(plant))}
                      disabled={added}
                    >
                      {added ? 'Added to cart' : 'Add to cart'}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </main>
  )
}

export default ProductList
