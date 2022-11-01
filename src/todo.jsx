import React from 'react';
import Button from 'react-bootstrap/Button';

import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Password } from '@mui/icons-material';

export default function todo() {
    // const adminUser = {
    //     email: "admin@admin.com",
    //     Password: "admin123"
    // }
    // const [user, setuser] = useState({ name: "", email: "" });
    // const [error, setError] = useState("");

    // const login = detail => {
    //     console.log(detail);
    // }

    // const logout = () => {
    //     console.log("layout");
    // }
    return (
        // <div className="todo">
        //     {(user.email != "") ? (
        //         <div className="welcome">
        //             <h2>welcome, <span>{user.name}</span></h2>
        //             <button>logout</button>
        //         </div>

        //     )
        //         : (lodinfrom)}


        <div class="center">
            <tr>
                <td>  <IconButton 
                color="inherit">
                    <MenuIcon />
                </IconButton> News
                    {/* <div class> */}

                    {/* </div> */}
                </td>

                <td  >
                    {/* <Button variant="btn"><i variant="fa fa-bars"></i></Button> */}
                    <button type="button"  class="btn p"style={{
                    marginLeft:335
                }}>
                    {/* <i class="fa-solid fa-house-user"></i> */}
                    LOGIN
                    </button>
                </td>
            </tr>


            {/* <Button variant="primary">Primary</Button> */}

        </div>





    )
}