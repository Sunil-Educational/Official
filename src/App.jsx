const config = {
  pageName: 'SUNIL TRADERS OFFICIAL™',
  telegramLink: 'https://telegram.me/+NRqHPiAy90w4MDU1',
  imageSrc: `${import.meta.env.BASE_URL}logo.jpg`,
};

const features = [
  { icon: '✅', className: 'green', text: 'Discover Elite Financial Education & Trading Basics' },
  { icon: '📈', className: 'purple', text: 'Learn Stock Market Strategies from Experts' },
];

function App() {
  return (
    <section className="bg-color">
      <div className="container">
        <div className="hero">
          <h1 className="gold">📚 <span>{config.pageName}</span> 📚</h1>
          <div className="hero-content">
            <p className="magenta">Explore Nifty &amp; BankNifty with Free Educational Resources</p>
            <div className="logo">
              <img src={config.imageSrc} alt="Educational Channel Logo" loading="lazy" />
            </div>
            <a target="_blank" rel="noreferrer" className="cta" href={config.telegramLink}>Join Free Telegram</a>
            {features.map((feature) => (
              <div className="feature-card" key={feature.text}>
                <p className={feature.className}><span className="emoji" aria-hidden="true">{feature.icon}</span>{feature.text}</p>
              </div>
            ))}
            <p className="orange">Join our community to access free tutorials, strategies, and educational content focused on stock market learning.</p>
            <p className="blue"><a href="https://telegram.me/+2brlAMzDH7EyNDVl">EVOLUTION DIGITAL MARKETING™</a></p>
            <p className="disclaimer"><span>Disclaimer:</span> This platform is for educational purposes only and is not registered with SEBI. We do not offer financial advice, investment recommendations, or guarantees of any kind. Trading and investments involve significant risks, including the potential loss of capital, and may not be suitable for all individuals. Past performance is not indicative of future results. Always consult a qualified, SEBI-registered financial advisor before making any investment decisions. By using this platform, you acknowledge and accept all associated risks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
