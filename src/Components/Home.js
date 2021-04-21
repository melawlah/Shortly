const Home = () => {
  return (
    <div>
      <div class="container pt-5 homeDiv">
        <div class="row">
          <div class="col-12 col-md-7">
            <div className="home">
              <h1 className="homeHeading"> More than just shorter links </h1>
              <p className="buildBrand">
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </p>
            </div>
            <button className="getStartedButton"> Get Started </button>
          </div>
          <div class="col-12 col-md-5">
            <img
              src="https://res.cloudinary.com/lawlah/image/upload/v1618404744/illustration-working.svg"
              alt="Working woman"
              class="workingWomanImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
