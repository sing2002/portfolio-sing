import { IconButton, Grid } from "@mui/material";
export default function Foodter() {
    return (
        <div
            style={{
                backgroundColor: "black",
                width: "100%",
                height: "20vh",
            }}
        >
            <div><br />
                <center>
                    <Grid container style={{ padding: '50', display: 'flex', justifyContent: 'center' }}>

                        <Grid item xs={3}> <a href="https://www.instagram.com/sx.sings_x/" target="_blank" rel="noopener noreferrer"><img src="ig.png" alt="" width={"9%"} /></a>
                            <a href="https://www.facebook.com/profile.php?id=100010815904253" target="_blank" rel="noopener noreferrer"><img src="f.png" alt="" width={"10%"} /></a></Grid>

                    </Grid>


                </center>

            </div>

        </div>
    );
}