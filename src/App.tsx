import './App.css'

const sections = [
  { id: 'boulangerie', name: 'Boulangerie', subtitle: 'Breads & viennoiseries', note: 'A little butter. A lot of love.', items: [
    { id: 'sourdough', name: 'Sourdough', price: '8.00', portion: 'loaf', description: 'A crackly crust, an airy heart, and that lovely little tang.' },
    { id: 'focaccia', name: 'Focaccia', price: '5.00', portion: 'piece', description: 'Pillowy olive-oil bread, rosemary dimples, and a pinch of sea salt.' },
    { id: 'brioche', name: 'Brioche', price: '6.00', portion: 'loaf', description: 'Golden, buttery, and soft enough to make mornings a little sweeter.' },
    { id: 'croissant', name: 'Croissant', price: '3.50', portion: 'piece', description: 'Delicate, buttery layers. A golden shell. Crumbs absolutely encouraged.' },
    { id: 'cinnamon-roll', name: 'Cinnamon roll', price: '4.50', portion: 'piece', description: 'A soft cinnamon-sugar spiral under a generous ribbon of vanilla icing.' },
  ] },
  { id: 'patisserie', name: 'Pâtisserie', subtitle: 'Cakes & sweet little things', note: 'Save a little room for sweet.', items: [
    { id: 'flan', name: 'Flan pâtissier', price: '5.00', portion: 'slice', description: 'Silky vanilla custard in a crisp pastry shell, baked until beautifully golden.' },
    { id: 'cheesecake', name: 'Baked cheesecake', price: '6.50', portion: 'slice', description: 'Creamy, gently tangy, and tucked onto a buttery biscuit base.' },
    { id: 'fraisier', name: 'Fraisier', price: '7.00', portion: 'slice', description: 'Fresh strawberries, light sponge, and vanilla cream, all dressed in layers.' },
    { id: 'paris-brest', name: 'Paris-Brest', price: '6.50', portion: 'piece', description: 'A golden choux ring filled with hazelnut praline cream and almond crunch.' },
    { id: 'tiramisu', name: 'Tiramisu', price: '6.00', portion: 'slice', description: 'Coffee-kissed sponge, clouds of mascarpone, and a soft dusting of cocoa.' },
    { id: 'brownies', name: 'Brownies', price: '4.00', portion: 'piece', description: 'Deep chocolate, a crinkly top, and a wonderfully fudgy middle.' },
    { id: 'cookies', name: 'Cookies', price: '3.00', portion: 'piece', description: 'Golden edges, a soft centre, and generous pockets of melted chocolate.' },
  ] },
]

function App() {
  return (
    <>
      <a className="skip-link" href="#menu">Skip to menu</a>
      <div className="awning" aria-hidden="true" />
      <header id="top" className="masthead">
        <span className="masthead-note">the good stuff,<br />all in one place.</span>
        <div className="menu-title"><span className="eyebrow">BOULANGERIE & PÂTISSERIE</span><h1>Le menu<span className="title-star" aria-hidden="true">✳</span></h1><span className="title-underline" aria-hidden="true" /></div>
        <div className="header-drawing"><img src="/images/croissant.png" alt="" /><span>oh, là là!</span></div>
      </header>
      <nav className="category-nav" aria-label="Menu categories">
        <a href="#boulangerie">Boulangerie <span>01</span></a>
        <span className="nav-star" aria-hidden="true">✳</span>
        <a href="#patisserie">Pâtisserie <span>02</span></a>
      </nav>
      <main id="menu">
        {sections.map((section, sectionIndex) => (
          <section className="menu-section" id={section.id} key={section.id} aria-labelledby={section.id + '-heading'}>
            <div className="section-heading">
              <div><span className="section-number">0{sectionIndex + 1} /</span><h2 id={section.id + '-heading'}>{section.name}</h2><p>{section.subtitle}</p></div>
              <span className="hand-note">{section.note}</span>
            </div>
            <div className="menu-grid">
              {section.items.map((item) => (
                <article className="menu-item" key={item.id}>
                  <div className="item-art"><img src={'/images/' + item.id + '.png'} alt={'Hand-drawn ' + item.name.toLowerCase()} width="240" height="200" loading="lazy" /></div>
                  <div className="item-copy"><div className="item-title"><h3>{item.name}</h3><span className="price"><span>$</span>{item.price}</span></div><p>{item.description}</p><span className="portion">per {item.portion}</span></div>
                </article>
              ))}
              {sectionIndex === 0 && <div className="menu-aside" aria-hidden="true"><span>Good things<br />take dough.</span><span className="aside-star">✳</span></div>}
            </div>
          </section>
        ))}
      </main>
      <footer><span className="footer-note">That’s the sweet life.</span><p>Sample menu · Placeholder prices in USD</p><a href="#top">Back to the top ↑</a></footer>
      <div className="bottom-checks" aria-hidden="true" />
    </>
  )
}
export default App
