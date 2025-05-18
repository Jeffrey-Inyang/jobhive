function JobCard({ title, company, location, description }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.company}>{company} — {location}</p>
      <p style={styles.description}>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  title: {
    margin: '0 0 0.5rem 0',
  },
  company: {
    fontWeight: 'bold',
    margin: '0 0 0.5rem 0',
    color: '#555',
  },
  description: {
    margin: 0,
    color: '#333',
  },
};

export default JobCard;
