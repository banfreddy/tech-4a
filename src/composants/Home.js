import { useState } from "react";

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
            <div className="bloglist">
               {
                    blogs.map( (blog) =>(

                        <div className="blog" key={blog.id}>
                                
                                <a href="#" className="blog-titre">{blog.title}</a>
                                <p className="blog-publication-date "> Plubié le :{blog.date}</p>
                                <p className="blog-author">pubier par :{blog.author}</p>
                        </div>
                    ))
                            
                 }  
            </div>
            <p>by Freddy Banza</p>
        </div>
     );
}
 
export default Home;