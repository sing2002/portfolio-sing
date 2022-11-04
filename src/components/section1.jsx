import { TypeAnimation } from "react-type-animation";

export default function Section1() {
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
                </div>
            </div>
        </div>
    );
}