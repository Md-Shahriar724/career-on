import { useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TbFolderBolt } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utils/Store";


const ApliedJobs = () => {
  const AllJobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const oneJob = AllJobs.find((job) => job.id === idInt);
  const {
    company_name,
    contact_information,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    job_title,
    salary,
  } = oneJob;
  const { phone, email, address } = contact_information;

  const handleTost = ()=>{

    saveJobApplication(idInt)

    toast('🦄You successfully applyed', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <div className=" md:flex gap-4 item-center justify-around ">
   <ToastContainer/>
        <div className=" w-5/6 mx-auto md:w-3/4">
          <div className="my-20 ">
            <div className="hero  shadow-md rounded-xl">
              <div className="hero-content flex-col lg:flex-row">
                <div>
                  <h1 className="text-2xl font-bold">{company_name}</h1>
                  <p className="py-4 text-gray-600 text-sm">
                    <span className="text-md font-bold text-black">
                      Job Description :
                    </span>{" "}
                    {job_description}
                  </p>
                  <p className="py-4 text-gray-600 text-sm">
                    <span className="text-md font-bold text-black">
                      Job Responsibility :
                    </span>{" "}
                    {job_responsibility}
                  </p>
                  <p className="text-md font-bold text-black">
                    Educational Requirements :
                  </p>
                  <p className="py-4 text-gray-600 text-sm">
                    {educational_requirements}
                  </p>
                  <p className="text-md font-bold text-black">Experiences :</p>
                  <p className="py-4 text-gray-600 text-sm">{experiences}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-5/6 mx-auto md:w-1/4  my-10 md:my-20 rounded-md shadow-md bg-purple-100 grid justify-end">

        <div className="px-4 my-4 ">

        <p className="text-md font-bold py-2 pb-4 border-b border-purple-950">Job Details</p>

        <div className="flex mt-4 gap-1">
            <AiOutlineDollarCircle className="text-lg"/>
            <p className="text-sm"><span className="text-md font-bold">Salary:</span > {salary}/mon</p>
        </div>
        <div className="flex mt-2 mb-4 gap-1">
            <TbFolderBolt className="text-xl"/>
            <p className="text-sm"><span className="text-md font-bold">Job title:</span > {job_title}</p>
        </div>
        <p className="text-md font-bold pb-4 border-b border-purple-950"> Contact information</p>
        <div className="mt-6">

       
        <div className="flex gap-1 pb-2">
            <FiPhoneCall className="text-lg"/>
        <p className="text-sm"><span className="text-md font-bold">Phone :</span> {phone}</p>
        </div>
        <div className="flex gap-1 pb-2">
            <MdOutlineMarkEmailRead className="text-lg"/>
        <p className="text-sm"><span className="text-md font-bold">E-mail :</span>{email}</p>
        </div>
        <div className="flex gap-1 pb-2">
            <CiLocationOn className="text-5xl"/>
        <p className="text-sm"><span className="text-md font-bold">Address :</span> {address}</p>
        </div>
        
        </div>
        <div className=" ">
        
          <button onClick={()=>handleTost()} className="bg-purple-500 px-12 py-2 mt-2 rounded-lg text-white ">Aplly Now</button>
        
        </div>
        </div>

        </div>
      
    </div>
  );
};

export default ApliedJobs;
