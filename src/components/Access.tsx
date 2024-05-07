import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Access = (props:any)=>{

  

    return (
      
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control type="text" className="" placeholder="Enter NRIC" onChange={e=>props.setUserIC(e.target.value)} />
                {props.error && <Form.Text className="text-danger">
                 *Please Enter Your NRIC correctly
                </Form.Text>}
            </Form.Group>



            <Button variant="outline-dark mt-2" className="w-100" type="button" onClick={props.gainAccess}>
                Enter/Scan
            </Button>
            </Form>



    )

}


export default Access;