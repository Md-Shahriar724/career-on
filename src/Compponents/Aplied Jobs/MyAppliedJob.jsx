import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../Utils/Store";
import MyJob from "./MyJob";

const MyAppliedJob = () => {
  const yourJobs = useLoaderData();
  console.log(yourJobs);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([])


  const handleJobFilter = (filter)=>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }
        else if(filter === 'remote'){
            const remoteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJob)
        }
        else if(filter === 'onsite'){
            const onsiteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJob)
        }
  }

  useEffect(() => {
    const storedJobsId = getStoredApplication();
    if (yourJobs.length > 0) {
      // const jobApplied = yourJobs.filter(yourJob => storedJobsId.includes(yourJob.id))
      const jobApplied = [];
      for (const id of storedJobsId) {
        const job = yourJobs.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }

      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied)
      // console.log(storedJobsId, yourJobs,jobApplied)
    }
    // return[]
  }, []);

  return (
    <div>
      <div className=" md:flex justify-center items-center md:justify-around mt-6">
        <h1 className="text-2xl font-bold text-center ">
          Job I applyed: {appliedJobs.length}
        </h1>
        <div className="grid justify-center md:justify-end my-4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              {" "}
              Filter Job
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={()=>{handleJobFilter('all')}} >All</a>
              </li>
              <li>
                <a onClick={()=>{handleJobFilter('remote')}} >Remote</a>
              </li>
              <li>
                <a onClick={()=>{handleJobFilter('onsite')}} >Onsite</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-10">
        {displayJobs.map((appliedJob) => (
          <MyJob key={appliedJob.id} appliedJob={appliedJob}></MyJob>
        ))}
      </div>
    </div>
  );
};

export default MyAppliedJob;
