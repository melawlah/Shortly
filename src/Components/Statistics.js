import SearchBar from "./SearchBar";

const Statistics = () => {
  return (
    <div className="statistics">
      <SearchBar />
      <div>
        <div class="row">
          <div class="col-12 col-md-4"></div>
          <div class="col-12 col-md-4 stat">
            <div>
              <h2 className="statHeader">
                <b> Advanced Statistics </b>
              </h2>{" "}
              &nbsp;
              <p className="statBody">
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
           
          </div>
          <div class="col-12 col-md-4"></div>
        </div>
      </div>

      <div class="container pb-5">
        <div class="row">
         
            <div class="col-md-4">
            <div class="card card-profile">
                  <div class="card-avatar brand">
                    <a href="#pablo">
                      <img alt ="" class="img" src="https://res.cloudinary.com/lawlah/image/upload/v1618714775/icon-brand-recognition.svg" />
                    </a>
                  </div>
                        <div class="card-body">
                              <h4 class="card-title">Brand Recognition</h4>
          
                              <p class="card-description">
                                    Boost your brand recognition with each click. Generic links don’t 
                                  mean a thing. Branded links help instil confidence in your content.
                              </p>
                              
                          </div>
             
            </div>
            </div>
            <div class="col-md-4 pt-5">
            <div class="card card-profile">
                  <div class="card-avatar brand">
                    <a href="#pablo">
                      <img class="img" alt ="" src="https://res.cloudinary.com/lawlah/image/upload/v1618714929/icon-detailed-records.svg" />
                    </a>
                  </div>
                        <div class="card-body ">
          
                              <h4 class="card-title"> Detailed Records</h4>
          
                              <p class="card-description">
                                    Gain insights into who is clicking your links. Knowing when and where 
                                  people engage with your content helps inform better decisions.
                              </p>
                              
                          </div>
             
            </div>
                
            </div>
            
            <div class="col-md-4 pt-1 thirdcard">
                <div class="card card-profile">
                  <div class="card-avatar brand">
                    <a href="#pablo">
                      <img  alt ="" class="img" src="https://res.cloudinary.com/lawlah/image/upload/v1618714820/icon-fully-customizable.svg" />
                    </a>
                  </div>
                  <div class="card-body ">
    
                        <h4 class="card-title"> Fully Customizable </h4>
    
                        <p class="card-description">
                              Improve brand awareness and content discoverability through customizable 
                            links, supercharging audience engagement.
                        </p>
                        
                    </div>
                 </div>
            </div>
        </div>
    </div>
</div>
  );
};
export default Statistics;
