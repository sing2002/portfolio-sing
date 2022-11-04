import { IconButton, Grid } from "@mui/material";
export default function Section4() {
    return (
        <div
            style={{
                backgroundColor: "#1f1f1f",
                width: "100%",
                height: "60vh",
            }}
        ><br /><br />
            <center>
                <div >

                    <p style={{ color: "white" }}>skills</p>

                </div><br />
            </center>
            <div style={{ color: "white", fontSize: "15px" }}>


                <Grid container style={{ padding: '50', display: 'flex', justifyContent: 'center' }} >


                    <Grid item xs={1} style={{
                        blackgroundColor: "white"
                    }}>

                        <div > <center> <img src="html.png" alt="" width={"30%"} />
                            <p>html5</p></center> </div>

                    </Grid>
                    <Grid item xs={1}>

                        <div><center><img src="css.png" alt="" width={"30%"} />
                            <p>css</p></center>
                        </div>

                    </Grid>
                    <Grid item xs={1}>

                        <div> <center><img src="js.png" alt="" width={"30%"} />
                            <p>javascrip</p></center>
                        </div>

                    </Grid>
                    <Grid item xs={1}>


                        <div> <center><img src="angularjs.png" alt="" width={"30%"} />
                            <p>Angular</p></center> </div>
                    </Grid>
                    <Grid item xs={1}>
                        <center> <img src="b.png" alt="" width={"30%"} />
                            <p>bootstrap</p></center>



                    </Grid>
                    <Grid item xs={1}>
                        <center><img src="c.png" alt="" width={"30%"} />
                            <p>c#</p></center>



                    </Grid>
                    <Grid item xs={1}>
                        <center><img src="sql.png" alt="" width={"30%"} />
                            <p>Mysql</p></center>



                    </Grid>

                </Grid>

            </div>

        </div>
    );
}