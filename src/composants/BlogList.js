const BlogList = ({blogs,title}) => {
    return ( 
        <div className="bloglist">
            <h1 >{title} </h1>
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
     );
}
 
export default BlogList;