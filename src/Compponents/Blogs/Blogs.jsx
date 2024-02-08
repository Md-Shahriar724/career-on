import { useEffect, useState } from "react";
import News from "./News";


const Blogs = () => {

    const [newses, setNewses] = useState([])

            const url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=c07292238e2144e5b44fbec97d046695';
        const req = new Request(url);
        useEffect(()=>{
            fetch(req)
            .then(res =>res.json())
            .then(data => setNewses(data.articles))
        },[])
   
    return (
        <div>
            <h1>This is Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-around items-center">
                {
                    newses.map((news) =><News key={news.url} news={news}></News>)
                }
            </div>
        </div>
    );
};

export default Blogs;