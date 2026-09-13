import { useState } from 'react';

const config = {
  name: 'SUNIL TRADERS OFFICIAL™',
  telegram: 'https://telegram.me/+NRqHPiAy90w4MDU1',
  logo: '/logo.jpg',
};

const features = [
  ['01', 'Structured learning', 'Step-by-step lessons for Nifty, BankNifty and trading basics.'],
  ['02', 'Market watchlists', 'Educational market levels and chart discussions shared with context.'],
  ['03', 'Community support', 'Ask questions and learn alongside a focused trading community.'],
  ['04', 'Risk-first mindset', 'Build better habits with practical risk awareness and no profit promises.'],
];

const markets = [
  ['NIFTY 50', 'Large-cap index', 'Trend, range and momentum setups'],
  ['BANK NIFTY', 'Banking index', 'Volatility and key support zones'],
  ['SENSEX', 'Broad market index', 'Major market sentiment shifts'],
  ['FINNIFTY', 'Financial services index', 'Sector-focused chart structure'],
  ['USD / INR', 'Currency pair', 'Price movement and macro context'],
  ['GOLD', 'Commodity', 'A popular defensive instrument'],
];

const faqs = [
  ['Is this financial advice?', 'No. The content is educational only, not a recommendation, guarantee or promise of returns.'],
  ['What will I find in the Telegram community?', 'Educational tutorials, market-study notes, chart discussions and general trading concepts.'],
  ['Do I need prior trading experience?', 'No. Start with fundamentals, then move towards chart reading and market awareness.'],
  ['Are profits guaranteed?', 'No. Markets involve risk and losses are possible. We do not guarantee outcomes or returns.'],
];

function trackClick() {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', { source: 'telegram_cta' });
  }
}

function TelegramButton({ children = 'Join Free Telegram', className = '' }) {
  return (
    <a className={'button button-primary ' + className} href={config.telegram} target="_blank" rel="noreferrer" onClick={trackClick}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <div className="notice-bar">18+ only · Educational content · Markets involve risk · No guaranteed returns</div>
      <header className="site-header">
        <a className="brand" href="#top" onClick={close}><span className="brand-mark">ST</span><span><strong>SUNIL TRADERS</strong><small>OFFICIAL LEARNING COMMUNITY</small></span></a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
        <nav className={'site-nav ' + (open ? 'is-open' : '')}>
          <a href="#about" onClick={close}>About</a>
          <a href="#markets" onClick={close}>Markets</a>
          <a href="#how-it-works" onClick={close}>How it works</a>
          <a href="#faq" onClick={close}>FAQs</a>
          <TelegramButton className="nav-cta">Join community</TelegramButton>
        </nav>
      </header>
    </>
  );
}

function App() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <div id="top" className="app-shell">
      <Header />
      <main>
        <section className="hero-section" id="about">
          <div className="hero-grid content-width">
            <div className="hero-copy reveal">
              <span className="eyebrow">A calmer way to study the markets</span>
              <h1>Learn the market.<br /><em>Build your edge.</em></h1>
              <p className="hero-lead">Explore Nifty, BankNifty and more with clear educational resources, thoughtful chart discussions and a community that keeps risk in the conversation.</p>
              <div className="hero-actions"><TelegramButton /><a className="button button-secondary" href="#how-it-works">See how it works</a></div>
              <div className="trust-row"><span>✓ Beginner friendly</span><span>✓ Daily learning</span><span>✓ Risk aware</span></div>
            </div>
            <div className="hero-visual reveal reveal-delay">
              <div className="hero-card">
                <div className="hero-card-top">MARKET STUDY / TODAY</div>
                <div className="logo-frame"><img src={config.logo} alt={config.name + ' logo'} /></div>
                <p className="hero-card-label">SUNIL TRADERS</p>
                <h2>Make learning<br /><span>your first trade.</span></h2>
                <div className="chart-lines"><span /><span /><span /><span /><span /></div>
                <div className="hero-card-foot"><span>EDUCATION FIRST</span><strong>NO PROMISES</strong></div>
              </div>
            </div>
          </div>
          <div className="ticker content-width"><span>WHAT WE COVER</span><b>NIFTY 50</b><b>BANK NIFTY</b><b>SENSEX</b><b>FINNIFTY</b><b>GOLD</b><b>USD / INR</b></div>
        </section>

        <section className="section section-paper" id="features">
          <div className="content-width">
            <div className="section-heading"><span className="eyebrow">WHY THIS COMMUNITY</span><h2>A better foundation<br /><em>for market learning.</em></h2><p>Less noise. More context. A practical starting point for people who want to understand what moves the market.</p></div>
            <div className="feature-grid">
              {features.map(([number, title, text]) => <article className="feature-item" key={number}><span className="feature-number">{number}</span><h3>{title}</h3><p>{text}</p><span className="feature-tag">LEARN WITH CLARITY ↗</span></article>)}
            </div>
          </div>
        </section>

        <section className="section section-ink" id="markets">
          <div className="content-width">
            <div className="section-heading heading-light"><span className="eyebrow">EDUCATIONAL WATCHLIST</span><h2>Markets worth<br /><em>understanding.</em></h2><p>A simple starting watchlist for studying price action, sectors and broader market context.</p></div>
            <div className="market-grid">
              {markets.map(([name, type, text], index) => <article className="market-item" key={name}><span className="market-index">0{index + 1}</span><div><h3>{name}</h3><span>{type}</span><p>{text}</p></div><a href={config.telegram} target="_blank" rel="noreferrer" onClick={trackClick} aria-label={'Study ' + name + ' in Telegram'}>↗</a></article>)}
            </div>
          </div>
        </section>

        <section className="section section-paper" id="how-it-works">
          <div className="content-width"><div className="section-heading centered"><span className="eyebrow">YOUR NEXT THREE STEPS</span><h2>Start simple.<br /><em>Stay consistent.</em></h2></div><div className="steps-grid"><article className="step-item"><span className="step-number">01</span><div><h3>Join the Telegram channel</h3><p>Tap any Join Free button and enter the official learning community.</p></div></article><article className="step-item"><span className="step-number">02</span><div><h3>Choose your learning path</h3><p>Start with the basics or follow the latest educational market discussion.</p></div></article><article className="step-item"><span className="step-number">03</span><div><h3>Practice with discipline</h3><p>Use the resources to learn, journal and make informed decisions.</p></div></article></div><div className="mid-cta"><h3>Take the first step into the community.</h3><TelegramButton /></div></div>
        </section>

        <section className="section section-sand" id="reviews"><div className="content-width"><div className="section-heading centered"><span className="eyebrow">FROM THE COMMUNITY</span><h2>Learning feels better<br /><em>when it is shared.</em></h2></div><div className="quote-grid"><figure className="quote-item"><div className="stars">★★★★★</div><blockquote>“The explanations are simple enough to follow, especially when I study charts on my phone.”</blockquote><figcaption><strong>Aarav S.</strong><span>New Delhi</span></figcaption></figure><figure className="quote-item"><div className="stars">★★★★★</div><blockquote>“The community keeps the focus on learning instead of unrealistic promises.”</blockquote><figcaption><strong>Riya K.</strong><span>Pune</span></figcaption></figure><figure className="quote-item"><div className="stars">★★★★★</div><blockquote>“I joined for the basics and stayed for the structured market discussions.”</blockquote><figcaption><strong>Vikram P.</strong><span>Ahmedabad</span></figcaption></figure></div></div></section>

        <section className="section section-paper" id="faq"><div className="content-width faq-layout"><div className="section-heading"><span className="eyebrow">CLEAR ANSWERS</span><h2>Questions,<br /><em>answered.</em></h2><p>Read the important details before joining. Transparency comes first.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={'faq-item ' + (openFaq === index ? 'is-open' : '')} key={question}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><b>{openFaq === index ? '-' : '+'}</b></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>
        <section className="disclaimer-band"><div className="content-width"><strong>Important:</strong> This platform is for education only. It does not provide financial advice, investment recommendations or guaranteed results. Trading and investing involve risk, including loss of capital.</div></section>
      </main>
      <footer className="site-footer"><div className="content-width footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-mark">ST</span><span><strong>SUNIL TRADERS</strong><small>OFFICIAL LEARNING COMMUNITY</small></span></a><p>Clear market education for people who want to learn with context and discipline.</p></div><div><h4>Explore</h4><a href="#about">About</a><a href="#markets">Markets</a><a href="#how-it-works">How it works</a><a href="#faq">FAQs</a></div><div><h4>Join the community</h4><p>Get educational resources and market-study discussions on Telegram.</p><TelegramButton /></div></div><div className="footer-bottom content-width"><span>© 2026 Sunil Traders Official™</span><span>Educational content only · 18+</span></div></footer>
    </div>
  );
}

export default App;
