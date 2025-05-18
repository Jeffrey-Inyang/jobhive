import './JobFilter.css';

function JobFilter() {
  return (
    <section className="filter-section">
      <h2>Search & Filter Jobs</h2>
      
      <div className="search-fields">
        <input type="text" placeholder="Search by keyword..." />
        <input type="text" placeholder="Company name..." />
        <input type="text" placeholder="Job ID (optional)" />
      </div>

      <div className="filter-controls">
        <select>
          <option value="">Sort by</option>
          <option value="newest">Date Posted (Newest)</option>
          <option value="salary">Salary (High to Low)</option>
          <option value="relevance">Relevance</option>
        </select>

        <select>
          <option value="">Job Category</option>
          <option>IT & Software</option>
          <option>Marketing</option>
          <option>Finance</option>
          <option>Healthcare</option>
          <option>Public Sector</option>
        </select>

        <select>
          <option value="">Experience Level</option>
          <option>Entry</option>
          <option>Mid</option>
          <option>Senior</option>
        </select>

        <select>
          <option value="">Job Type</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Internship</option>
          <option>Contract</option>
        </select>

        <select>
          <option value="">Location</option>
          <option>Lagos</option>
          <option>Abuja</option>
          <option>Remote</option>
        </select>

        <select>
          <option value="">Remote / Onsite</option>
          <option>Remote</option>
          <option>Onsite</option>
          <option>Hybrid</option>
        </select>
      </div>
    </section>
  );
}

export default JobFilter;
