import { fontSize } from "@mui/system";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Button,Text,Heading } from "@chakra-ui/react"
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"

};

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <div style={styles.container}>
      <Heading as="h1" size="lg">
                Helpline Number : xxxxxxxxxx 
            </Heading>
      
      <h2 style={{fontSize:"50px"}}> Feedback </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={28}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea
        placeholder="Submit Your Feedback...."
        style={styles.textarea}
      />
    <Button  bg="white" variant="outline" mb={5} _hover={{ bg:"teal" , color:"white"}}>
                Feedback
            </Button>

     

    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "0.1px solid #663300",
    borderRadius: 20,
    padding: 25,
    margin: "20px 0",
    minHeight: 300,
    width: 320,
    outline:"none"
    
  },


};




export default App;


