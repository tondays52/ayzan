import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Menu, ShoppingBag, X, ArrowRight } from 'lucide-react';
import './styles.css';

const products = [
  { name: 'Cloud Cleanser', type: 'Melt + soothe', price: '$38', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85', tone: 'sand' },
  { name: 'Dew Serum', type: 'Plump + brighten', price: '$54', img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=85', tone: 'peach' },
  { name: 'Daily Veil SPF', type: 'Protect + glow', price: '$42', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=900&q=85', tone: 'olive' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bagCount, setBagCount] = useState(0);
  const [notice, setNotice] = useState('');
  const add = (item) => { setBagCount(v => v + 1); setNotice(`${item} added to your ritual.`); window.setTimeout(() => setNotice(''), 2600); };
  return <main>
    <div className="announcement">Complimentary shipping on orders over $75 <span>✦</span> Made with intention, every day</div>
    <header><button className="icon-btn mobile-only" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22}/></button><a className="brand" href="#top">LUMÉA</a><nav><a href="#shop">Shop</a><a href="#ritual">Rituals</a><a href="#story">Our story</a></nav><button className="bag" onClick={() => add('Your chosen essentials')}><ShoppingBag size={18}/><span>Bag ({bagCount})</span></button></header>
    {menuOpen && <div className="mobile-menu"><button className="icon-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button><a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a><a href="#ritual" onClick={() => setMenuOpen(false)}>Rituals</a><a href="#story" onClick={() => setMenuOpen(false)}>Our story</a></div>}
    {notice && <div className="toast">{notice}</div>}
    <section className="hero" id="top"><div className="hero-copy"><p className="micro">SKINCARE FOR THE SLOW HOURS</p><h1>Skin, in its<br/><em>best light.</em></h1><p className="intro">Thoughtful, barrier-loving formulas for the kind of glow that feels like you.</p><button className="button dark" onClick={() => document.querySelector('#shop').scrollIntoView({behavior:'smooth'})}>Shop the ritual <ArrowUpRight size={18}/></button></div><div className="hero-image"><img src="https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=1400&q=90" alt="Luméa skincare bottles in warm studio light"/><div className="scribble">made for<br/>your skin</div></div></section>
    <section className="marquee"><span>Thoughtful formulas</span><i>✦</i><span>Visible comfort</span><i>✦</i><span>Kind to skin</span><i>✦</i><span>Everyday rituals</span></section>
    <section className="edit section" id="shop"><div className="section-head"><div><p className="micro">THE EVERYDAY EDIT</p><h2>Meet your new<br/><em>essentials.</em></h2></div><a className="text-link" href="#shop">Shop all <ArrowRight size={16}/></a></div><div className="products">{products.map((p) => <article className="product" key={p.name}><div className={`product-image ${p.tone}`}><img src={p.img} alt={p.name}/><button onClick={() => add(p.name)} aria-label={`Add ${p.name}`}>+</button></div><div className="product-meta"><div><h3>{p.name}</h3><p>{p.type}</p></div><strong>{p.price}</strong></div></article>)}</div></section>
    <section className="story" id="story"><div className="story-photo"><img src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1200&q=88" alt="Woman with luminous healthy skin"/></div><div className="story-copy"><p className="micro">BEAUTY, MADE PERSONAL</p><h2>Quiet formulas.<br/><em>Visible results.</em></h2><p>We believe skincare should be a pause, not a performance. Every Luméa formula is a carefully balanced blend of proven actives and soft, sensory textures.</p><a className="button outline" href="#ritual">Our approach <ArrowUpRight size={18}/></a></div></section>
    <section className="ritual section" id="ritual"><div className="ritual-top"><p className="micro">THE RITUAL</p><h2>A little time,<br/><em>beautifully spent.</em></h2></div><div className="steps"><div className="step"><span>01</span><h3>Begin soft</h3><p>Wash the day away with a cushiony, low-foam cleanse.</p></div><div className="step photo-step"><img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85" alt="Gentle skincare ritual"/></div><div className="step"><span>02</span><h3>Feed your glow</h3><p>Layer hydration and active care, one calm drop at a time.</p></div><div className="step"><span>03</span><h3>Seal it in</h3><p>Finish with protection that feels invisible, never heavy.</p></div></div></section>
    <section className="journal"><div><p className="micro">THE LUMÉA LETTER</p><h2>Stay close to<br/><em>the good stuff.</em></h2></div><form onSubmit={(e)=>{e.preventDefault();setNotice('Welcome to the Luméa letter.')}}><label htmlFor="email">A soft little note for your inbox.</label><div><input id="email" type="email" required placeholder="Your email address"/><button aria-label="Subscribe"><ArrowRight size={20}/></button></div></form></section>
    <footer><a className="brand" href="#top">LUMÉA</a><p>© 2026 Luméa Skin. Made slowly, for every day.</p><div><a href="#top">Instagram</a><a href="#top">Contact</a></div></footer>
  </main>;
}
createRoot(document.getElementById('root')).render(<App />);
