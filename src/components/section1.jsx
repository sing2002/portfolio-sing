import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Section2 from "./section2";
import { Brightness2TwoTone } from "@mui/icons-material";

export default function Section1({ isLao, onSetIsLao, }) {


    return (

        <div>
            <div
                style={{
                    backgroundColor: "#e9d5a1",
                    width: "100%",
                    height: "100vh",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <div>
                    <img
                        src="/houp.png"
                        alt=""
                        style={{ width: 300, height: 300 }}
                    />
                    <center>
                        <h4>{isLao ? 'ສຸຸກສະຫວັນ' : 'Souksavanh'} 🥳</h4>
                        <div style={{ height: 50 }}>

                            {isLao ? <TypeAnimation
                                sequence={


                                    [
                                        "content1       ", // Types 'One'
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
                                style={{ fontSize: "1em" }}
                            /> : <TypeAnimation
                                sequence={


                                    [
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
                                style={{ fontSize: "1em" }}
                            />}
                        </div>
                        {/* <p> {isLao ? 'ຂ້ອຍເປັນຄົນລາວ' : 'khoi khon lao'}</p> */}
                    </center><br /><br /><br />

                    <div >
                        <center >
                            <img src="laos.png" alt="" onClick={
                                function () {
                                    onSetIsLao(true);
                                    // ond(true);
                                }
                            } style={{
                                width: "50px", height: "50px", cursor: 'pointer',
                                filter: isLao ? 'brightness(50%)' : null
                            }} />
                            <img src="us.png" alt=""
                                onClick={
                                    function () {
                                        onSetIsLao(false);
                                        // ond(false);
                                    }}
                                style={{ width: "50px", height: "50px", cursor: "pointer", filter: isLao ? null : 'brightness(40%)' }} />
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
}