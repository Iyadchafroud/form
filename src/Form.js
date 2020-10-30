import React from 'react'
import './Form.css';
import{Button,FormGroup, FormLabel, FormControl,FormText ,Container,FormCheck
} from 'react-bootstrap';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
function Form() {
    return (
        <div>

  <Container className="container  border-primary  ">
    <AccountBoxIcon className="icon"/>
    <h3>wellcome</h3>
  <FormGroup controlId="formBasicEmail">
    <FormLabel>Email address</FormLabel>
    <FormControl className="formcontrol" type="email" placeholder="Enter22 email" />
    <FormText className="text-muted">
      We'll never share your email with anyone else.
    </FormText>
  </FormGroup>
   <FormGroup controlId="formBasicPassword">
    <FormLabel>Password</FormLabel>
    <FormControl className="formcontrol" type="password" placeholder="Password" />
  </FormGroup>
  <FormGroup controlId="formBasicCheckbox">
    <FormCheck className="check"  type="checkbox" label="Check me out" />
  </FormGroup>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Container>

        </div>
    )
}

export default Form
