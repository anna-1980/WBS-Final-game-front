const Footer = () => {
  return (
    <div className='footerMainDiv'>
      <div className="textFooter">
        <h5>Created by Anna Zdyb ©</h5>
        
      </div>
      
      <div className="socialMedia">
      <h6>find me on:</h6>
        <a href="https://github.com/" target="_blank" rel="noopener">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener">
          <i className="fa-brands fa-instagram"></i>
        </a>
        {/* <h5>To sent me a message use the form on the Contact page</h5> */}
      </div>
    </div>
  );
};

export default Footer;
