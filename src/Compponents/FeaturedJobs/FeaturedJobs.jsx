import { useEffect, useState } from "react";
import Feature from "./Feature";


const FeaturedJobs = () => {

        const [features, setFeatures] = useState([])

        useEffect( ()=>{
            fetch('job.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
        },[])
 

    return (
        <div>
            <h2 className="text-center text-4xl">Featured Jobs</h2>
            <p className="text-center text-sm">Explore thousands of job opportunities with all  the information you need. Its your future.</p>
            <div className="grid md:grid-cols-2 ">
                {
                    features.map((feature)=><Feature key={feature.id} feature={feature}></Feature>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;