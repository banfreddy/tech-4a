const Navbar = () => {
    return (
        <nav className = "navbar">
            <div>
                <a href = "page/accueil.js" className = "logo" > Alba Blog </a> 
            </div> 
            <ul className = "liens">
                <li>
                    <a href = "page/accueil"className = "lien" > Accueil </a> 
                </li> 
                <li>
                    <a href = "page/article" className = "lien buttonArticle " > Créer Articles </a> 
                </li> 
            </ul> 
        </nav>
    );
}

export default Navbar;