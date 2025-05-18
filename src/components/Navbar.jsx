function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>JobHive 🐝</h2>
      <ul style={styles.navItems}>
        <li>Home</li>
        <li>Jobs</li>
        <li>Post a Job</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#ffe600',
  },
  logo: {
    margin: 0,
  },
  navItems: {
    display: 'flex',
    listStyle: 'none',
    gap: '1rem',
    margin: 0,
  },
};

export default Navbar;
