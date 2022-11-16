import { IconButton, Grid } from "@mui/material";

export default function Section2({ isLao, onSetIsLao }) {

    return (
        <div>
            <div
                style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "80vh",

                }}
            >
                <center>
                    <br />

                    <p> {isLao ? 'ກ່ຽວກັບຂ້ອຍ' : ' ABOUT ME'}</p>
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



                        <p style={{
                            fontSize: 15, padding: 5,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'

                        }}>
                            <p style={{ fontSize: 18, }}>
                                <b>  {isLao ? 'ສະບາຍດີ :)' : 'Hi :)'} </b> </p><br />
                            {isLao ? "ຂ້ອຍແມ່ນຊິ່ງ. ສໍາລັບຈຸດປະສົງຕົວຢ່າງຂ້ອຍກໍາລັງເຮັດວຽກກັບກອບດ້ານຫນ້າໃຫມ່ທີ່ສຸດເຊັ່ນ Angular,rect ແລະ Vue. ສິ່ງ​ທີ່​ທ່ານ​ກໍາ​ລັງ​ເຫັນ​ໃນ​ປັດ​ຈຸ​ບັນ​ແມ່ນ​ແມ່​ແບບ​ຫຼັກ​ຊັບ​ຈາກDorota 1997. ຖ້າທ່ານມັກແມ່ແບບ portfolio ນີ້, ໃຫ້ແນ່ໃຈວ່າ ⭐ repository ເພື່ອເຮັດໃຫ້ມັນສາມາດຮັບຮູ້ຫຼາຍສໍາລັບຜູ້ໃຊ້ອື່ນໆ.ຂອບໃຈ💜" : "I'm Sing. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular,React and Vue. What you are seeing now is portfolio template fromDorota1997. If you like this portfolio template, make sure to ⭐the repository to make it more recognizable for other users.Thank you 💜"}

                        </p>

                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

