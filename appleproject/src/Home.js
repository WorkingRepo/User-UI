import React, { Component } from 'react';



  class Home extends Component {

  render() {

  return(
  <div>
  <a name="top"></a>
  <div className="intro-header">
      <div className="container">

          <div className="row">
              <div className="col-lg-12">
                  <div className="intro-message">
                      <h2 className="top-title">Restaurant Finder</h2>
                      <h3>Best In City</h3>
                      <hr className="intro-divider"/>
                      <div className="input-group col-md-12">
                            <input type="text" className="search-query form-control" placeholder="Search" />
                            <span className="input-group-btn">
                                <button className="btn btn-danger" type="button">
                                    <span className=" glyphicon glyphicon-search"></span>
                                </button>
                            </span>
                        </div>
                  </div>
              </div>
          </div>

      </div>


  </div>
 </div>


  );
 }
}

export default Home;
