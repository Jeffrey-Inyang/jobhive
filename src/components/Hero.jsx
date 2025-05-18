function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Best Platform To Get Your Dream Job</h1>

        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search job title or keyword"
            style={styles.searchInput}
          />
          <span style={styles.sponsor}>Sponsored by APTECH</span>
        </div>

        <p style={styles.hireText}>
          Over 500,000 jobs in 200+ fields. Now let’s get you hired!
          <br />
          <a href="#" style={styles.link}>
            Want to hire? Click here
          </a>
        </p>

        <div style={styles.logos}>
          <img src="/slack.png" alt="Slack" style={styles.logo} />
          <img src="/microsoft.png" alt="Microsoft" style={styles.logo} />
          <img src="/apple.png" alt="Apple" style={styles.logo} />
          <img src="/meta.png" alt="Meta" style={styles.logo} />
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    width: '100vw',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #f5f5f5, #eaeaea)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '4rem 1rem',
  },
  container: {
    textAlign: 'center',
    maxWidth: '800px',
    width: '100%',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    color: '#111',
  },
  searchContainer: {
    marginBottom: '1rem',
  },
  searchInput: {
    padding: '0.75rem 1rem',
    width: '80%',
    maxWidth: '500px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  sponsor: {
    display: 'block',
    marginTop: '0.5rem',
    fontSize: '0.85rem',
    color: '#888',
  },
  hireText: {
    marginTop: '1.5rem',
    fontSize: '1rem',
    color: '#444',
  },
  link: {
    color: '#007bff',
    textDecoration: 'underline',
    fontWeight: '500',
  },
  logos: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '2rem',
    flexWrap: 'wrap',
  },
  logo: {
    height: '40px',
    objectFit: 'contain',
  },
};

export default Hero;
