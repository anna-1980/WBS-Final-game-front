const form= () => {
    return(
        <div className="form">
        <form name="contact" method="post" >
        <input type="hidden" name="form-name" value="contact" />
          <div className="nameInput">
            <label htmlFor="name">Name</label> 
            <input 
        type="text" 
        id="name" 
        name="name" 
        placeholder="Enter your name here" 
        required/>
          </div>
          <div className="emailAddress">
            <label htmlFor="email" >Email</label>  
            <input type="email" name="email" id="email" placeholder="Enter your email here" required />
          </div>
          <div className="contactMessage">
            <label htmlFor="message" className="msgText" >Message</label><br />
            <textarea  name="message" id="message" cols="50" rows="10" required></textarea>
          </div>
          {/* <div data-netlify-recaptcha="true"></div> */}
          <div className="buttonDiv">
          <button type="submit" className="formButton">Send</button>
          </div>
     
        </form>
      </div>
    
    )
}
export default form 
{/* <form name="contact" netlify netlify-honeypot="bot-field" hidden>
<input type="text"  name="name">
<input type="email" name="email">
<textarea name="message"></textarea>
<input type="hidden" name="contact" value="contact" />
</form> */}

{/* <form name="contact" method="post" >
  <div className="nameInput">
    <label htmlFor="name">Name</label> 
    <input type="text" id="name" name="name" placeholder="Enter your name here" required/>
  </div>
  <div className="emailAddress">
    <label htmlFor="email" >Email</label>  
    <input type="email" name="email" id="email" placeholder="Enter your email here" required />
  </div>
  <div className="contactMessage">
    <label htmlFor="message" className="msgText" >Message</label><br />
    <textarea  name="message" id="message" cols="50" rows="10" required></textarea>
  </div>
  {/* <div data-netlify-recaptcha="true"></div> */}
//   <div className="buttonDiv">
//   <button type="submit" className="formButton">Send</button>
//   </div>
//   <p>
// <input type="submit" value="Submit message" />
// </p>
// </form> */}
