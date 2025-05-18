function Categories() {
  const categories = [
    { label: 'IT & Software', emoji: '💻' },
    { label: 'Marketing', emoji: '📢' },
    { label: 'Finance', emoji: '💰' },
    { label: 'Healthcare', emoji: '🩺' },
    { label: 'Government', emoji: '🏛️' },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Explore by categories</h2>
      <p style={styles.subtext}>200+ Categories for you to choose from</p>
      <div style={styles.grid}>
        {categories.map((cat) => (
          <div key={cat.label} style={styles.card}>
            <span style={styles.emoji}>{cat.emoji}</span>
            <p>{cat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '4rem 2rem',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subtext: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '2rem',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  card: {
    background: '#fff',
    padding: '1.5rem 2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    minWidth: '150px',
    cursor: 'pointer',
    fontWeight: '500',
  },
  emoji: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    display: 'block',
  },
};

export default Categories;
