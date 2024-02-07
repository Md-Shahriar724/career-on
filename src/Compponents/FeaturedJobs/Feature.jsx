import { CiLocationOn } from "react-icons/ci";
import { LuDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";

const Feature = ({ feature }) => {
  console.log(feature);
  const {
    id,
    logo,
    job_title,
    company_name,
    location,
    remote_or_onsite,
    salary,
    job_type,
  } = feature;
  return (
    <div>
      <div className="card w-80 md:w-96 bg-base-100 shadow-xl my-6">
        <div className="card-body">
          <h2 className="card-title">{company_name}</h2>
          <p>{job_title}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
            <div className="flex gap-2">
            <CiLocationOn className="text-xl"/>
            <p>{location}</p>
            </div>
            <div className="flex gap-2">
                <LuDollarSign className="text-xl"/>
                <p>{salary}</p>
            </div>
          </div>
          <div>
            <button className="text-xs border border-purple-400 text-purple-500 px-4 py-2 rounded-lg font-bold mx-2" >Remote</button>
            <button className="text-xs border border-purple-400 text-purple-500 px-4 py-2 rounded-lg font-bold mx-2" >Full Time</button>
          </div>
          <div className="card-actions justify-start md:justify-end">
            <Link to={`/job/${id}`}>
            <button className="btn btn-primary my-4 md:my-2">Watch Detail</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
