import React, { useState } from 'react'
import Select from 'react-select';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import { Button, Text, Heading, Box, Input, FormControl, FormLabel, InputLeftAddon, InputGroup } from "@chakra-ui/react"
import Recaptcha from "react-recaptcha";

function Home() {
    const data = [
        {
            value: 1,
            label: "Dowry"
        },
        {
            value: 2,
            label: "Harassment"
        },
        {
            value: 3,
            label: "Rape"
        },
        {
            value: 4,
            label: "PHP"
        },
        {
            value: 5,
            label: "C#"
        },
        {
            value: 6,
            label: "Go"
        }
    ];
    const [selectedOption, setSelectedOption] = useState(null);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }
    return (
        <div className="home">
        <Box maxW="80rem" p="50px 0px 50px 100px">
        <Heading style={{textAlign :"center"}} fontSize="xxl" mb={30}>Submit A Helpline No.</Heading>
        
        
        <div style={{marginTop:"30px", marginLeft:"50px"}} class="Sput">
       
    
        
        <FormControl style={{paddingBottom:"20px"}} id="first-name" isRequired>
        <FormLabel>Organization Name</FormLabel>
        <Input  placeholder="Organization Name" />
        </FormControl>
        <FormControl style={{paddingBottom:"20px"}} id="first-name" isRequired>
        <FormLabel>Address of the organization</FormLabel>
        <Input  placeholder="Organization Name" />
        </FormControl>
        <FormControl style={{paddingBottom:"20px"}} id="first-name" isRequired>
        <FormLabel>Your Phone Number</FormLabel>
        <InputGroup>
        <InputLeftAddon children="+91/+022" />
        <Input type="tel" placeholder="phone number" />
        </InputGroup>
        </FormControl>
        <FormControl style={{paddingBottom:"20px"}} id="first-name" isRequired>
        <FormLabel>Location</FormLabel>
        <Input placeholder="Location" />
        </FormControl>
        
      
            <FormLabel style={{fontSize:"30px"}} size="xl">Issues</FormLabel>
                    <div className="dropdown">


                        <Select
                            isMulti
                            placeholder="Issues"
                            value={selectedOption}
                            options={data} // list of the data
                            onChange={handleChange} // assign onChange function
                        />

                        {/* {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <b>Selected Options</b><br />
        <pre>{JSON.stringify(selectedOption, null, 2)}</pre>
      </div>} */}
                    </div>
                    {/* {value}

           

            <MultiSelect className= "ph" hidePlaceholder={true} placeholder = "search" 
                
                options={options} /> */}
                </div>
                <Button style={{marginLeft:"50px"}}size="lg" colorScheme="teal" mt="34px">
                    Submit
            </Button>
            <Recaptcha
              sitekey="6LfCqn8cAAAAAMtY5AFClOkoiqVal5pSBtuZT9ar"
              render="explicit"
            //   onloadCallback={this.recaptchaLoaded}
            //   verifyCallback={this.verifyCallback}
            //   onClick={this.handleSubscribe}
            />
            </Box>
        </div>
        
    )
}

export default Home;