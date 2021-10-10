import { Heading } from "@chakra-ui/react";
import ReCAPTCHA from "react-google-recaptcha";
import React  from "react";
import Recaptcha from "react-recaptcha";
import {Component,NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Text,
  Box,
  Input,
  FormControl,
  FormLabel,
  Select,
  ButtonGroup,

} from "@chakra-ui/react";

// class Team extends Component {
//   constructor(props) {
//     super(props);

//     this.handleSubscribe = this.handleSubscribe.bind(this);
//     this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
//     this.verifyCallback = this.verifyCallback.bind(this);

//     this.state = {
//       isVerified: false,
//     };
//   }

//   recaptchaLoaded() {
//     console.log("capcha successfully loaded");
//   }

//   handleSubscribe() {
//     if (this.state.isVerified) {
//       alert("You have successfully subscribed!");
//     } else {
//       alert("Please verify that you are a human!");
//     }
//   }

//   verifyCallback(response) {
//     if (response) {
//       this.setState({
//         isVerified: true,
//       });
//     }
//   }

//   render() 
      function Team()  {
    return (
      <>
        <div>
          <Box maxW="20rem">
            <Heading style={{ textAlign: "center" }} fontSize="xl" mb={30}>
              Submit A Helpline Number
            </Heading>
            <div>
              <FormControl id="Name_org" isRequired>
                <FormLabel>Name of the organization</FormLabel>
                <Input placeholder="Name of the organization" />
              </FormControl>
            </div>
            <div>
              <FormControl id="Add" isRequired>
                <FormLabel>Address of the organization</FormLabel>
                <Input placeholder="Address of the organization" />
              </FormControl>
            </div>
            <div>
              <NumberInput defaultValue={15} min={10} max={20}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </div>

            <div>
              <FormControl id="Add" isRequired>
                <FormLabel>Location</FormLabel>
                <Input placeholder="Location" />
              </FormControl>
            </div>
            <div>
              <ButtonGroup variant="outline" spacing="6">
                <Button colorScheme="blue">Save</Button>
                <Button>Cancel</Button>
              </ButtonGroup>{" "}
            </div>
          </Box>
        
        <div className="App">
        
            <Recaptcha
              sitekey="6LfCqn8cAAAAAMtY5AFClOkoiqVal5pSBtuZT9ar"
              render="explicit"
            //   onloadCallback={this.recaptchaLoaded}
            //   verifyCallback={this.verifyCallback}
            //   onClick={this.handleSubscribe}
            />
            
            <div className="convert" >
              Submit
            </div>
          </div>
        </div>
      </>
    );
  }


export default Team;




