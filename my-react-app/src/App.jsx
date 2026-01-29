import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/vite.svg" alt="logo" width="32" height="32" className="me-2" />
          Bootstrap UI Lab
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cards">Cards</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header id="home" className="bg-light py-5">
      <div className="container text-center">
        <h1 className="display-5">Designing UI Using Bootstrap</h1>
        <p className="lead">A small single-page application demonstrating Bootstrap components: navbar, cards, and forms.</p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <a className="btn btn-primary btn-lg" href="#cards">See Cards</a>
          <a className="btn btn-outline-primary btn-lg" href="#contact">Contact Us</a>
        </div>
      </div>
    </header>
  )
}

function CardsSection() {
  const cards = [
    { title: 'Card One', text: 'This is a simple card with supporting text to build on the card title and make up the bulk of the card\'s content.' },
    { title: 'Card Two', text: 'Cards can be used to display content composed of different types — text, images, and links.' },
    { title: 'Card Three', text: 'Use the grid system to create a responsive layout of cards that collapse on smaller screens.' }
  ]

  return (
    <section id="cards" className="py-5">
      <div className="container">
        <h2 className="mb-4">Card-Based Layout</h2>
        <div className="row g-4">
          {cards.map((c, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img src={i === 0 ? viteLogo : reactLogo} className="card-img-top" alt="card" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{c.title}</h5>
                  <p className="card-text flex-grow-1">{c.text}</p>
                  <a href="#" className="btn btn-primary mt-2">Learn more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // For a lab/demo we just log the data. In a real app you'd send this to a server.
    console.log('Contact form submitted', form)
    alert('Thanks! Message recorded in console.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Contact Us</h2>
        <div className="row">
          <div className="col-12 col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} className="form-control" rows="4" required />
              </div>
              <button className="btn btn-primary" type="submit">Send Message</button>
            </form>
          </div>
          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <div className="p-4 border rounded bg-white h-100">
              <h5>Office</h5>
              <p className="mb-1">123 Bootstrap Lane</p>
              <p className="mb-1">Frontend City, Web 00001</p>
              <p className="mb-0">Email: lab@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-4 bg-dark text-light">
      <div className="container d-flex justify-content-between align-items-center">
        <small>© {new Date().getFullYear()} Bootstrap UI Lab</small>
        <div>
          <a className="text-light me-3" href="https://vite.dev" target="_blank">Vite</a>
          <a className="text-light" href="https://react.dev" target="_blank">React</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <main>
        <CardsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
