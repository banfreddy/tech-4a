import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs,setBlog] = useState([
        {   id: 1,
            title: "Bienvenu  à nom blog",
            body: "la ville de likasi",
            author: "Banza",
            date: "02/01/2021"
        },
        {   id: 2,
            title: "Bienvenu  à kikula",
            body: "la ville de likasi",
            author: "Banza",
            date: "02/01/2021"
        },
        {   id: 3,
            title: "Bienvenu  à likasi",
            body: "la ville de likasi",
            author: "ilunga",
            date: "02/01/2022"
        },
        {   id: 4,
            title: "Bienvenu  à Shituru",
            body: "la ville de shituru",
            author: "Banza",
            date: "02/01/2022"
        }
    ]);
 
       

    return ( 
        <div className="home">
            
            <BlogList blogs={blogs} title={'Liste des Blogs'}/>
           
        </div>
     );
}
 
export default Home;