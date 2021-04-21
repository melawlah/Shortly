import axios from "axios";
import React, { useState } from 'react';

const SearchBar = () => {

  const [data, setData] = useState({});
  console.log(data, "data")

  let handleChange = (e) => {
    e.persist();
    setData(data => ({...data, [e.target.id]: e.target.value}));
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://api.shrtco.de/v2/shorten?url="+ data.link)
      .then((res) => {
        console.log(res, "response");
        alert(res.data.result.full_short_link);
      })
      .catch((error) => {
        console.log(error);
      });
  };
return (
  <div>
    <div class ="container searchBarStyle pb-5"> 
    <div class="row">
      <div class="col-12 col-md-12 backgroundCard">
        <div class="Card">
          <div class="CardInner">
            <form onSubmit ={handleSubmit}>
              <input placeholder="    Shorten a link here..." className ="InputContainer" onChange ={handleChange}
              id ="link"
              />
              &nbsp; &nbsp;
              <button className="shortenButton" type ="submit"> Shorten It! </button>
            </form>
        </div>
        </div>
      </div>
    </div>
    </div>
  </div>
)
}

export default SearchBar;