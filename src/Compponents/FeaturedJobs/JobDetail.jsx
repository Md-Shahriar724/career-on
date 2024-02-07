import { useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const JobDetail = () => {
  const AllJobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const oneJob = AllJobs.find((job) => job.id === idInt);
  const {logo, company_name, contact_information, job_description} = oneJob
  const {phone, email, address} =contact_information;

  return (
    <div>
      <div className="my-20 ">
        <div className="hero  bg-base-200 rounded-xl">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={logo}
            />
            <div>
              <h1 className="text-2xl font-bold">{company_name}</h1>
              <p className="py-4 text-gray-600 text-sm">
               {job_description}
              </p>
              <p>Phone : {phone}</p>
              <p>E-mail : {email}</p>
              <p>Address : {address}</p>
              <button className="btn btn-primary my-4">Aplly Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
