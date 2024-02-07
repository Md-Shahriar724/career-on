import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCatagorie from "../JobCatagories/JobCatagorie";


const Home = () => {
    return (
        <div>
            <JobCatagorie></JobCatagorie>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;