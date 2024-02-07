import { useEffect, useState } from "react"
import Job from "./Job";

const JobCatagorie = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('catagorie.json')
        .then(res =>res.json())
        .then(data =>setJobs(data))
    },[])

    console.log(jobs)

    return (
        <div className="my-10">
            <h2 className="text-center text-4xl">Job Catagories</h2>
            <p className="text-center text-sm">Here are some job Catagories I would like work on</p>
            <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-2 my-8 ">
                {
                    jobs.map((job)=><Job key={job.id} job={job} ></Job>)
                }
            </div>
        </div>
    );
};

export default JobCatagorie;