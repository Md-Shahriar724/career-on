

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

var url = 'https://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=c07292238e2144e5b44fbec97d046695';
var req = new Request(url);
fetch(req)
.then(function(response) {
console.log(response.json());
})

export{getStoredApplication, saveJobApplication}