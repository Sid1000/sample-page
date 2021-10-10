import React from 'react'
import {useState} from 'react';
import { Radio, RadioGroup, Stack, Checkbox, Button,Heading} from "@chakra-ui/react";
import aa from './aa.png';
            
function Main_Home() {
    var a=1
    const [isActive, setActive] = useState("false");
   function Click(e){
       
      if(a==0){

      e.target.style.color = 'teal';
      e.target.style.backgroundColor = 'white'
        a = 1;

      }
      else{
        e.target.style.color = 'white';
        e.target.style.backgroundColor = '#ff4500'
        a = 0;

      }

  }
    return (
        <div>
        <div className="home2">
            <Heading style={{textAlign :"center",color : "#00221C",marginLeft:"250px"}} pt={10} fontSize="60px" mb={30}>Womenhelpline.in</Heading>
            <a href="https://www.google.co.in/">
                <img src={aa} alt="helplineimg" style={{marginLeft:"475px", marginTop:"100px"}}></img>
            </a>        
            <button className="needhelp" type="button"><div id="nh">Need Help?</div></button>
            <button className="submithelpline" type="button"><div id="nh">Submit a Helpline</div></button>
            
            <div style={{marginLeft:"200px"}}>
            <div style={{position:"relative", display:'flex', marginTop:"200px",marginLeft:"35px"}}>
            
            <p style={{color:"#003E3F", fontSize:"50px", opacity:"0.3", marginLeft:"150px"}}>What would you like help with?</p>
            </div>
            <div style={{marginLeft:"-100px"}}>
            <div class="Sopts" >
                <Button onClick={()=>setActive(!isActive)}  style={{marginLeft:"170px"}} size="lg"  colorScheme="teal" mt="24px" variant="outline">
                    Dowry
                </Button>
                <Button onClick={Click} size="lg" colorScheme="teal" mt="24px" variant="outline">
                    Sexual Harrasment
                </Button>
                <Button onClick={Click} size="lg" colorScheme="teal" mt="24px" variant="outline">
                    Stalking
                </Button>
                <Button onClick={Click} size="lg" colorScheme="teal" mt="24px" variant="outline">
                    Child Marriage
                </Button>
                <Button onClick={Click} size="lg" colorScheme="teal" mt="24px" variant="outline">
                    Divorce
                </Button>
                <Button onClick={Click} size="lg" colorScheme="teal" mt="24px" variant="outline">
                    Rape
                </Button>
            </div>
            <div class="Sopts1" >
                <Button onClick={Click} style={{marginLeft:"210px"}}size="lg" colorScheme="teal" mt="24px" variant="outline">
                    Domestic Violence
                </Button>
                <Button onClick={Click} size="lg" colorScheme="teal" mt="24px" variant="outline">
                    Cyber Bullying
                </Button>
                <Button onClick={Click} size="lg" colorScheme="teal" mt="24px" variant="outline">
                    Sexual Abuse
                </Button>
                <Button onClick={Click} size="lg" colorScheme="teal" mt="24px" variant="outline">
                    Stalking
                </Button>
                <Button onClick={Click} size="lg" colorScheme="teal" mt="24px" variant="outline">
                    Rape
                </Button>
            </div>
            <div class="Sopts2" >
                <Button onClick={Click} style={{marginLeft:"280px"}}size="lg" colorScheme="teal" mt="24px" variant="outline">
                    Domestic Violence
                </Button>
                <Button onClick={Click} size="lg" colorScheme="teal" mt="24px" variant="outline">
                    Cyber Bullying
                </Button>
                <Button onClick={Click} size="lg" colorScheme="teal" mt="24px" variant="outline">
                    Sexual Abuse
                </Button>
                
            </div>
            </div>
            </div>
            <Button className="go" colorScheme="teal" size="lg" sx={{marginBottom:"150px"}}>
                Search For Helplines
            </Button>
            
           
        </div>    
        </div>
    )
}

export default Main_Home;
     
