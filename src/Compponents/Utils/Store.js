

const getStoredApplication = ()=>{
    const storedApplication = localStorage.getItem('job-application');
    if (storedApplication){
        return JSON.parse(storedApplication)
    }
    return [];
}

const saveJobApplication = (idInt)=>{
    const storedApplications = getStoredApplication();
    const exist = storedApplications.find(jobId => jobId ===idInt);
    if(!exist){
        storedApplications.push(idInt);
        localStorage.setItem('job-application', JSON.stringify(storedApplications))
    }
}


export{getStoredApplication, saveJobApplication}