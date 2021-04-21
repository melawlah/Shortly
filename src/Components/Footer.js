const Footer = () => {
return(
  <div className ="footer">
  <div class="container">
  <div class="row">
    <div class="col-lg-4 col-md-4 col-sm-12">
      <img
        src="https://res.cloudinary.com/lawlah/image/upload/v1618401517/logo.svg"
        className="d-inline-block align-top"
        alt="shortly"
      />
    </div>
    <div class="col-lg-5 col-md-5 col-sm-12">
      <div class="row">
        <div class="col-6 col-md-4 col-sm-12">
          <h6><b> Features</b> </h6> <br />
          <div className ="footermessages">
            <p> Link Shortening</p>
            <p>Branded Links </p>
            <p> Analytics</p>
          </div>
        </div>
        <div class="col-6 col-md-4 col-sm-12">  <h6><b> Resources</b> </h6> <br />
        <div className ="footermessages">
          <p> Blog</p>
          <p>Developers </p>
          <p> Support</p>
        </div>
          </div>
        <div class="col-6 col-md-4 col-sm-12">  <h6><b> Company </b></h6> <br />
        <div className ="footermessages">
          <p> About</p>
          <p>Our Team </p>
          <p>Careers </p>
          <p> Contacts</p>
          </div>
          </div>
      </div>
    </div>
    <div class="col-3 col-md-3 col-sm-12">
      <img src ="https://res.cloudinary.com/lawlah/image/upload/v1618647139/icon-facebook.svg" alt ="facebook" />&nbsp; &nbsp; &nbsp;
      <img src ="https://res.cloudinary.com/lawlah/image/upload/v1618647125/icon-twitter.svg" alt ="twitter"/> &nbsp; &nbsp;
      <img src ="https://res.cloudinary.com/lawlah/image/upload/v1618647031/icon-pinterest.svg" alt ="pinterest"/> &nbsp; &nbsp;
      <img src ="https://res.cloudinary.com/lawlah/image/upload/v1618647016/icon-instagram.svg" alt ="instagram" /> 
    
      
    </div>
  </div>
</div>
</div>
)
}
export default Footer;