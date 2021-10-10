import React from 'react';
import { Button, Text, Heading, Box, Input, FormControl, FormLabel,Textarea ,InputGroup,InputLeftAddon} from "@chakra-ui/react"

function Products() {
    return (
        <div className="home">
        <Box maxW="auto" ml={40} pt={10}>
        <Heading style={{textAlign :"center"}} fontSize="xxl" mb={30}>You seem to be lost! Need Some help?</Heading>
        <Text fontSize="xl">
            You can let us know what you are looking for by just selecting what you came here looking for from the options given below!!!
        </Text>
        <div class="Sopts" >
            <Button  size="lg" colorScheme="teal" mt="24px">
                Dowry
            </Button>
            <Button size="lg" colorScheme="teal" mt="24px">
                Sexual Harrasment
            </Button>
            <Button size="lg" colorScheme="teal" mt="24px">
                Stalking
            </Button>
            <Button size="lg" colorScheme="teal" mt="24px">
                Child Marriage
            </Button>
            <Button size="lg" colorScheme="teal" mt="24px">
                Divorce
            </Button>
            <Button size="lg" colorScheme="teal" mt="24px">
                Rape
            </Button>
        </div>
        <div class="Sopts1" >
            <Button style={{marginLeft:"110px"}}size="lg" colorScheme="teal" mt="24px">
                Domestic Violence
            </Button>
            <Button size="lg" colorScheme="teal" mt="24px">
                Cyber Bullying
            </Button>
            <Button size="lg" colorScheme="teal" mt="24px">
                Sexual Abuse
            </Button>
            <Button size="lg" colorScheme="teal" mt="24px">
                Stalking
            </Button>
            <Button size="lg" colorScheme="teal" mt="24px">
                Rape
            </Button>
        </div>
        <div class="Sopts2" >
            <Button style={{marginLeft:"210px"}}size="lg" colorScheme="teal" mt="24px">
                Domestic Violence
            </Button>
            <Button size="lg" colorScheme="teal" mt="24px">
                Cyber Bullying
            </Button>
            <Button size="lg" colorScheme="teal" mt="24px">
                Sexual Abuse
            </Button>
            
        </div>
        <div style={{marginTop:"100px"}} class="Sput">
        <Text style={{marginLeft:"120px"}} fontSize="xl">
            If what you were looking for is not included in the above options, You can let us know by typing it!
        </Text>
        <Input style={{color:"black"}} variant="flushed" placeholder="Enter The Problem You Are Facing Here" />
        </div>
        <Heading style={{ textAlign :"center", marginTop:"50px"}} fontSize="xxl" mb={30}>Tell us a little about Yourself!</Heading>
        <FormControl style={{paddingBottom:"20px"}} id="first-name" isRequired>
        <FormLabel mb={-30} pb={3}>Full Name</FormLabel>
        <Input  placeholder="Full Name" />
        </FormControl>
        <FormControl style={{paddingBottom:"20px"}} id="first-name" isRequired>
        <FormLabel mb={-30} pb={10}>Your Phone Number</FormLabel>
        <InputGroup>
            <InputLeftAddon children="+91/+022" />
            <Input type="tel" placeholder="phone number" />
            </InputGroup>
        </FormControl>
        <FormControl style={{paddingBottom:"20px"}} id="first-name" isRequired>
        <FormLabel mb={-30} pb={3}>Email Id</FormLabel>
        <Input placeholder="Email" />
        </FormControl>
        <FormControl style={{paddingBottom:"20px"}} id="first-name">
        <FormLabel mb={-0} pb={3} >Anything Else You Want To Tell Us?</FormLabel>
        <Textarea style={{paddingBottom:"50px",height:"100px",overflow:"hidden" }} maxLength="400"  placeholder="Your Message" />
        
        </FormControl>
        <Button style={{margin:"auto"}}size="lg" colorScheme="teal" m="24px 0 24px 0">
                Submit
        </Button>
        </Box>
        </div>
    )
}

export default Products;
