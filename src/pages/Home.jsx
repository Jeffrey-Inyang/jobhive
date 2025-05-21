import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedJobs from '../components/FeaturedJobs';
import JobFilter from '../components/JobFilter';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedJobs />
      <JobFilter />
      //What ever else goes between
      <Footer />
    </div>
  );
}

export default Home;
