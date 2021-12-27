function Footer() {
    return (  
    <footer className="page-footer teal lighten-2">
        <div className="col l6 s12 container">
          <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </div>
        <div className="footer-copyright">
        <div className='container '>
        © {new Date().getFullYear()} Copyright Text
        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
        </div>
  </footer> 
  );
}

export default Footer;