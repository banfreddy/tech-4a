import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs,setBlog] = useState(null);
 
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
            .then((reponse)=>{
                return reponse.json();
            })
            .then((data)=>{
                console.log(data);
                setBlog(data);
            })
    },[])

    return ( 
        <div className="home">
            
            {blogs && <BlogList blogs={blogs} title={'Liste des Blogs'}/>}
           
        </div>
     );
}
 
export default Home;