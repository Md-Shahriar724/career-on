import PropTypes from "prop-types";

const MyJob = ({ appliedJob }) => {
  const { id, job_title, job_description, company_name, job_type } = appliedJob;

  return (
    <div>
      <div className="hero max-h-96 md:h-72 my-4 shadow-2xl  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-6xl font-bold my-2">{company_name}</h1>
            <h1 className="text-xl font-bold my-2">{job_title}</h1>
            <p className="py-6 text-sm md:text-md">{job_description}</p>
          </div>
          <button className="btn btn-primary sm:mb-2">Get Started</button>
        </div>
      </div>
    </div>
  );
};

MyJob.propTypes = {
  id: PropTypes.string,
};

export default MyJob;
