import { useState } from 'react';

const pageConfig = {
  pageName: 'SUNIL TRADERS OFFICIAL™',
  telegramLink: 'https://telegram.me/+NRqHPiAy90w4MDU1',
  imageSrc: '/logo.jpg',
};

const features = [
  ['01', 'Structured learning', 'Step-by-step lessons for Nifty, BankNifty and trading basics.', 'LEARN WITH CLARITY'],
  ['02', 'Market watchlists', 'Educational market levels and chart discussions shared with context.', 'DAILY INSIGHTS'],
  ['03', 'Community support', 'Ask questions and learn alongside a focused trading community.', 'OPEN COMMUNITY'],
  ['04', 'Risk-first mindset', 'Build better habits with practical risk awareness and no profit promises.', 'TRADE RESPONSIBLY'],
];

const markets = [
  ['NIFTY 50', 'Large-cap index', 'Watch trend, range and momentum setups'],
  ['BANK NIFTY', 'Banking index', 'Study volatility and key support zones'],
  ['SENSEX', 'Broad market index', 'Follow major market sentiment shifts'],
  ['FINNIFTY', 'Financial services index', 'Explore sector-focused chart structure'],
  ['USD / INR', 'Currency pair', 'Understand price movement and macro context'],
  ['GOLD', 'Commodity', 'Track a popular defensive market instrument'],
];

const steps = [
  ['01', 'Join the Telegram channel', 'Tap any Join Free button and enter the official learning community.'],
  ['02', 'Choose your learning path', 'Start with the basics or follow the latest educational market discussion.'],
  ['03', 'Practice with discipline', 'Use the resources to learn, journal and make your own informed decisions.'],
];

const testimonials = [
  ['Aarav S.', 'New Delhi', 'The explanations are simple enough to follow, especially when I am studying charts on my phone.'],
  ['Riya K.', 'Pune', 'I joined for the basics and stayed for the structured market discussions and risk reminders.'],
  ['Vikram P.', 'Ahmedabad', 'The community keeps the focus on learning instead of making unrealistic promises.'],
];

const faqs = [
  ['Is this financial advice?', 'No. The content is educational only. It is not a recommendation, guarantee or promise of returns. Always do your own research and consult a qualified SEBI-registered advisor when appropriate.'],
  ['What will I find in the Telegram community?', 'You will find educational tutorials, market-study notes, chart discussions and general trading concepts shared for learning purposes.'],
  ['Do I need prior trading experience?', 'No. The learning path is designed to start with fundamentals, then move towards chart reading and market awareness.'],
  ['Are profits guaranteed?', 'No. Markets involve risk and losses are possible. We do not guarantee outcomes, signals or returns.'],
];

function trackTelegramClick() {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', { source: 'telegram_cta' });
  }
}

function TelegramButton({ children = 'Join Free Telegram', className = '' }) {
  return (
    <a className={`button button-primary ${className}`} href={pageConfig.telegramLink} target="_blank" rel="noreferrer" onClick={trackTelegramClick}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="notice-bar">18+ only · Educational content · Markets involve risk · No guaranteed returns</div>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">ST</span>
          <span><strong>SUNIL TRADERS</strong><small>OFFICIAL LEARNING COMMUNITY</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#markets" onClick={closeMenu}>Markets</a>
          <a href="#how-it-works" onClick={closeMenu}>How it works</a>
          <a href="#faq" onClick={closeMenu}>FAQs</a>
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
              <span className="eyebrow"><i /> A calmer way to study the markets</span>
              <h1>Learn the market.<br /><em>Build your edge.</em></h1>
              <p className="hero-lead">Explore Nifty, BankNifty and more with clear educational resources, thoughtful chart discussions and a community that keeps risk in the conversation.</p>
              <div className="hero-actions"><TelegramButton /><a className="button button-secondary" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a></div>
              <div className="trust-row"><span>✓ Beginner friendly</span><span>✓ Daily learning</span><span>✓ Risk aware</span></div>
            </div>
            <div className="hero-visual reveal reveal-delay">
              <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
              <div className="hero-card">
                <div className="hero-card-top"><span className="live-dot" /> MARKET STUDY / TODAY</div>
                <div className="logo-frame"><img src={pageConfig.imageSrc} alt="Sunil Traders Official logo" /></div>
                <p className="hero-card-label">SUNIL TRADERS</p>
                <h2>Make learning<br /><span>your first trade.</span></h2>
                <div className="chart-lines"><span /><span /><span /><span /><span /></div>
                <div className="hero-card-foot"><span>EDUCATION FIRST</span><strong>NO PROMISES</strong></div>
              </div>
            </div>
          </div>
          <div className="ticker content-width"><span>WHAT WE COVER</span><b>NIFTY 50</b><b>BANK NIFTY</b><b>SENSEX</b><b>FINNIFTY</b><b>GOLD</b><b>USD / INR</b></div>
        </section>

        <section className="section section-paper" id="features"><div className="content-width"><div className="section-heading"><span className="eyebrow">WHY THIS COMMUNITY</span><h2>A better foundation<br /><em>for market learning.</em></h2><p>Less noise. More context. A practical starting point for people who want to understand what moves the market.</p></div><div className="feature-grid">{features.map(([number, title, text, tag]) => <article className="feature-item" key={number}><span className="feature-number">{number}</span><h3>{title}</h3><p>{text}</p><span className="feature-tag">{tag} <b>↗</b></span></article>)}</div></div></section>

        <section className="section section-ink" id="markets"><div className="content-width"><div className="section-heading heading-light"><span className="eyebrow">EDUCATIONAL WATCHLIST</span><h2>Markets worth<br /><em>understanding.</em></h2><p>A simple starting watchlist for studying price action, sectors and broader market context.</p></div><div className="market-grid">{markets.map(([name, type, text], index) => <article className="market-item" key={name}><span className="market-index">0{index + 1}</span><div><h3>{name}</h3><span>{type}</span><p>{text}</p></div><a href={pageConfig.telegramLink} target="_blank" rel="noreferrer" onClick={trackTelegramClick} aria-label={`Study ${name} in Telegram`}>↗</a></article>)}</div></div></section>

        <section className="section section-paper" id="how-it-works"><div className="content-width"><div className="section-heading centered"><span className="eyebrow">YOUR NEXT THREE STEPS</span><h2>Start simple.<br /><em>Stay consistent.</em></h2></div><div className="steps-grid">{steps.map(([number, title, text]) => <article className="step-item" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><div className="mid-cta"><div><span className="eyebrow">READY WHEN YOU ARE</span><h3>Take the first step into the community.</h3></div><TelegramButton /></div></div></section>

        <section className="section section-sand" id="reviews"><div className="content-width"><div className="section-heading centered"><span className="eyebrow">FROM THE COMMUNITY</span><h2>Learning feels better<br /><em>when it is shared.</em></h2></div><div className="quote-grid">{testimonials.map(([name, location, quote]) => <figure className="quote-item" key={name}><div className="stars">★★★★★</div><blockquote>“{quote}”</blockquote><figcaption><strong>{name}</strong><span>{location}</span></figcaption></figure>)}</div></div></section>

        <section className="section section-paper" id="faq"><div className="content-width faq-layout"><div className="section-heading"><span className="eyebrow">CLEAR ANSWERS</span><h2>Questions,<br /><em>answered.</em></h2><p>Read the important details before joining. Transparency comes first.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'is-open' : ''}`} key={question}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><b>{openFaq === index ? '−' : '+'}</b></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

        <section className="disclaimer-band"><div className="content-width"><strong>Important:</strong> This platform is for education only. It does not provide financial advice, investment recommendations or guaranteed results. Trading and investing involve risk, including loss of capital. Please make independent decisions responsibly.</div></section>
      </main>
      <footer className="site-footer"><div className="content-width footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-mark">ST</span><span><strong>SUNIL TRADERS</strong><small>OFFICIAL LEARNING COMMUNITY</small></span></a><p>Clear market education for people who want to learn with context and discipline.</p></div><div><h4>Explore</h4><a href="#about">About</a><a href="#markets">Markets</a><a href="#how-it-works">How it works</a><a href="#faq">FAQs</a></div><div><h4>Join the community</h4><p>Get educational resources and market-study discussions on Telegram.</p><TelegramButton /></div></div><div className="footer-bottom content-width"><span>© 2026 Sunil Traders Official™</span><span>Educational content only · 18+</span></div></footer>
+    </div>
+  );
+}
+
+export default App;
