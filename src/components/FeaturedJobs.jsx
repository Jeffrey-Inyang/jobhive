function FeaturedJobs() {
  const jobs = [
    {
      title: 'Frontend Developer',
      company: 'Meta',
      location: 'Remote',
      salary: '$80,000 - $100,000',
      experience: 'Mid-level',
    },
    {
      title: 'Marketing Analyst',
      company: 'Slack',
      location: 'Lagos, Nigeria',
      salary: '$50,000 - $65,000',
      experience: 'Entry-level',
    },
    {
      title: 'Finance Associate',
      company: 'Apple',
      location: 'London, UK',
      salary: '$70,000 - $90,000',
      experience: 'Senior',
    },
    {
      title: 'Healthcare Assistant',
      company: 'Microsoft',
      location: 'Onsite - Abuja',
      salary: '₦3,500,000 - ₦5,000,000',
      experience: 'Mid-level',
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Featured Jobs</h2>
      <div style={styles.grid}>
        {jobs.map((job, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.title}>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Experience:</strong> {job.experience}</p>
            <button style={styles.button}>Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#f9f9f9', // light gray section background
    textAlign: 'center',
    color: '#222', // 🔥 ensures default text isn't white
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
    color: '#111', // darker heading
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#fff', // 🔥 ensures card is white
    padding: '1.5rem',
    borderRadius: '12px',
    textAlign: 'left',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    color: '#333', // 🔥 card text color
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#000',
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};


export default FeaturedJobs;
