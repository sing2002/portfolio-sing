import { IconButton, Grid } from "@mui/material";
export default function Section3() {
    return (
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
    );
}