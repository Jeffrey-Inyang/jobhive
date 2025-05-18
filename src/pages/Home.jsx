import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedJobs from '../components/FeaturedJobs';
import JobFilter from '../components/JobFilter';

function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedJobs />
      <JobFilter />

    </div>
  );
}

export default Home;
