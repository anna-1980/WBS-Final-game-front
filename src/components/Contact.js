import Form from "./Form";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="pageHead">
      <div className="contactPage">
        <h2>You can contact me just drop in a message😄</h2>
        {/* <button>
          <h2>✉️</h2>
        </button> */}
      </div>
      <Form />
      <Form />
      <Form />
      <div className="bouncer">
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
         
      </div>
      <div className="footerDown"></div>
      <div className="footerMainDiv">
          <Footer />
        </div>
    </div>
  );
};

export default Contact;
