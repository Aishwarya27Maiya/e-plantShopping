function AboutUs() {
  return (
    <main className="landing">
      <div className="landing-shade" />
      <section className="landing-content" aria-labelledby="landing-title">
        <a className="landing-brand" href="#/" aria-label="Paradise Nursery home">
          <span className="brand-mark" aria-hidden="true">✳</span>
          Paradise Nursery
        </a>
        <p className="eyebrow">A little more green, every day</p>
        <h1 id="landing-title">Bring the calm of nature home.</h1>
        <p className="landing-copy">
          At Paradise Nursery, we believe a greener home is a happier home.
          We handpick healthy, easy-to-love houseplants and deliver a little
          piece of the outdoors right to your door.
        </p>
        <a className="button button-light landing-cta" href="#/plants">
          Get Started <span aria-hidden="true">→</span>
        </a>
        <p className="landing-note">Thoughtfully grown. Ready for your home.</p>
      </section>
      <div className="landing-credit">GROW A LITTLE PARADISE</div>
    </main>
  )
}

export default AboutUs
