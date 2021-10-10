import React from 'react';
import { Grid, GridItem,Flex,Heading, Text,Stack,Button,BeatLoader } from "@chakra-ui/react"
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { AiOutlineCopy } from "react-icons/ai";
import { useToast } from "@chakra-ui/react"


  

function post() {
    const toast = useToast()
    return (
        <div className="post">
            <Grid templateColumns="repeat(3, 1fr)" gap={6} m={10}>

        <Flex flexDir="column" bg="teal" color="white" border="solid black 0.1px" p="5" borderRadius="10px">
            <Stack spacing={5}>
            <Flex bg="white" borderRadius="10px"><Heading as="h1" size="lg" color="teal" m="0 auto" p="3">
                Andra Pradesh
            </Heading></Flex>
            <Text> 
                Support Centres for Women East Godavari
            </Text>
            <Text> 
                22 September 2021
            </Text>
            <Heading as="h1" size="lg">
                Helpline Number with STD code: 
            </Heading>
            <Flex alignItems="center" bg="white" borderRadius="10px" > 
                <Heading as="h1" size="xl" paddingLeft="100px" color="Black" mr={10}>
                    9949844166
                </Heading>
                <CopyToClipboard text="9949844166"  onCopy={() =>  toast({
                    title: "COPIED",
                    description: "Phone Number Copied.",
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                    })}> 
                <AiOutlineCopy style={{color:"black",fontSize:"20px", cursor:"pointer"}}/>
                </CopyToClipboard>
            </Flex>

            <Text > Agency Running Helpline: Bhumika Womens Collective</Text>
            <Text > Cost or Charges: Free of Charge</Text>
            <Text> Operational Hours: Hours and days not known</Text>
            <Text> Location: East Godavari</Text>
            <Text> Email: NA</Text>
            <Text> Website:NA</Text>
            <Text> 
                     Services: Is located in the police proximity and supports women in various crime against women matters. Individuals can walk to the centre and meet them or talk to them over phone. They work in close coordination with the Police force.
            </Text>
            <Text> HLID:195 </Text>
            <Button colorScheme="teal" bg="white" variant="outline" _hover={{ bg: "teal" , color:"white"}}>
                Feedback
            </Button>
            </Stack>
        </Flex>
        

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

        </Grid>
        </div>
    )
}

export default post;
