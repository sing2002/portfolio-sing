// import logo from './logo.svg';
// import './App.css';
// import './todo';

import React from "react";
import Todo from "./todo";
import { IconButton, Grid } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { height, padding } from "@mui/system";

function App() {
  return (
    <div
      style={{
        fontfamily: "Courier New",
        fontSize: "30px",
        fontFamily: ' Courier New'
      }}
    >
      <div
        style={{
          backgroundColor: "#e9d5a1",
          width: "100%",
          height: "100vh",
        }}
      >
        <center>
          <img
            src="/houp.png"
            alt=""
            style={{ width: "15%", marginTop: 230 }}
          />
          <h4>Souksavanh 🥳</h4>
          <TypeAnimation
            sequence={[
              "content", // Types 'One'
              1000, // Waits 1s
              "creater", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "social",
              2000, // Types 'Three' without deleting 'Two'
              () => {
                console.log("Done typing!"); // Place optional callbacks anywhere in the array
              },
            ]}
            wrapper="div"
            cursor={false}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
        </center>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "80vh",
        }}
      >
        <center>
          <br />

          <p> ABOUT ME</p>
        </center><br />
        <Grid container spacing={10} style={{ paddingLeft: 100 }}>
          <Grid
            item
          >
            <div style={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              width: 250,
              padding: 15,

              // marginLeft: 150
            }}>
              <img src="sing.jpg" alt="" width="100%" height={300} />
              <br />
              <div>
                <center>
                  <img src="angular.png" alt="" width="25%" height="30%" />
                  <img src="react-js.png" alt="" width="30%" height="30%" />
                  <img src="vue.png" alt="" width="20%" height="30%" />

                </center>


              </div>
            </div>


          </Grid>
          <Grid item xs style={{ border: "1px solid lightgray", margin: 160, padding: 0, maxWidth: 1500, height: 200, fontFamily: ' Courier New' }}  >

            <div style={{ display: "flex", height: "35px", backgroundColor: ' #e7f1fb', padding: 20, }} >
              <div style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></div>
              <div style={{ width: "1%", height: "30%", backgroundColor: "whiet" }}></div>
              <div style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></div>
              <div style={{ width: "1%", height: "30%", backgroundColor: "whiet" }}></div>
              <div style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></div>
            </div>



            <p style={{ fontSize: 15, padding: 5 }}>
              <p style={{ fontSize: 18, }}>
                <b>  Hi :)</b> </p><br />
              👋 I'm Sing. Fictional person for preview purposes :)
              I'm working with newest front-end frameworks like Angular,
              React and Vue. What you are seeing now is portfolio template from
              Dorota1997. If you like this portfolio template, make sure to ⭐
              the repository to make it more recognizable for other users.
              Thank you 💜
            </p>

          </Grid>
        </Grid>
      </div>
      <div
        style={{
          backgroundColor: "#e9d5a1",
          width: "100%",
          height: "80vh",
          fontFamily: ' Courier New'
        }}>
        <br />
        <center>
          <span>PROJECTS</span>
        </center><br /><br />
        <Grid container >


          <Grid item xs={4} style={{ padding: 12 }} >
            <center>


              <div style={{
                boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                backgroundColor: "white",
                maxWidth: 350,
                padding: 20,
                height: "300px",
                cursor: 'pointer',
                height: "325px",
              }}>
                <img src="cosmetic.jpg" alt="" width="100%" height={210} />
                <div style={{ paddingLeft: "110px", paddingRight: "110px" }}>
                  <div style={{
                    fontSize: "5px", backgroundColor: "gray", color: 'white', borderRadius: "5px",
                  }}>2022</div>
                </div>
                <p>cosmetic</p>

              </div>

            </center>

          </Grid>


          <Grid item xs={4} style={{ padding: 12 }} >
            <center>
              <div style={{

                cursor: 'pointer',
                boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                // height: "300px",
                backgroundColor: "white",
                maxWidth: 350,
                padding: 20,
              }}>
                <img src="photographyPhoto.jpg" alt="" width="100%" height={210} />
                <div style={{ paddingLeft: "110px", paddingRight: "110px" }}>
                  <div style={{
                    fontSize: "5px", backgroundColor: "gray", color: 'white', borderRadius: "5px",
                  }}>2022</div>
                </div>
                <p>PHOTOGRAPY</p>

                {/* <span style={{
                  backgroundColor: '#696969',
                  color: 'white',
                  padding: '8px 15px 2px',
                  fontSize: '16px',
                  // borderTop: '8px  solid',
                  position: "static",
                  zIndex: "-800",
                  borderRadius: "5px",


                }}>2020</span> */}
              </div>
            </center>
          </Grid>
          <Grid item xs={4} style={{ padding: 12 }} >
            <center>
              <div style={{
                height: "325px",
                boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                maxWidth: 350,
                backgroundColor: "white",
                cursor: 'pointer',
                padding: 20,

              }}>
                <img src="food.jpg" alt="" width="100%" height={210} />
                <div style={{ paddingLeft: "110px", paddingRight: "110px" }}>
                  <div style={{
                    fontSize: "5px", backgroundColor: "gray", color: 'white', borderRadius: "5px",
                  }}>2022</div>
                </div>
                <p>comentator food</p>



              </div>
            </center>
          </Grid>

        </Grid>
      </div>

      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "50vh",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "#e9d5a1",
          width: "100%",
          height: "70vh",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "20vh",
        }}
      ></div>
    </div >
  );
}

export default App;
