
      import React, { useState } from 'react'
      import * as FaIcons from "react-icons/fa";
      import * as AiIcons from "react-icons/ai";
      import { Link } from 'react-router-dom'
      import { SidebarData } from './SidebarData'
      import './Navbar.scss';
      import { IconContext } from 'react-icons';
      //import { ReactSearchAutocomplete } from 'react-search-autocomplete'
      import { Dropdown } from 'semantic-ui-react'
      import location from './location.png';
      
      
      import { Button } from "@chakra-ui/react"
      import {Input,Stack ,InputGroup,InputRightAddon, Icon,InputLeftElement,InputRightElement,HStack, Menu, MenuButton, MenuList, Grid, MenuOptionGroup, MenuItemOption, MenuDivider ,Flex, Box ,Checkbox,MenuItem} from "@chakra-ui/react"
      import { SearchIcon } from "@chakra-ui/icons"
      
      // import TextField from '@material-ui/core/TextField';
      // import Autocomplete from '@material-u  i/lab/Autocomplete';
      // import { height } from '@mui/system';
      
      import { extendTheme } from "@chakra-ui/react"
      import filter from './filter.png';
      import language from './language.jpg';
      
      import { TriangleDownIcon } from "@chakra-ui/icons"
      
      import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react"
      
      
      
      function Navbar() {
      
      
        // const languageOptions = [
        //   { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
        //   { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
        //   { key: 'Danish', text: 'Danish', value: 'Danish' },
        //   { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
        //   { key: 'English', text: 'English', value: 'English' },
        //   { key: 'French', text: 'French', value: 'French' },
        //   { key: 'German', text: 'German', value: 'German' },
        //   { key: 'Greek', text: 'Greek', value: 'Greek' },
        //   { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' },
        //   { key: 'Italian', text: 'Italian', value: 'Italian' },
        //   { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
        //   { key: 'Korean', text: 'Korean', value: 'Korean' },
        //   { key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian' },
        //   { key: 'Persian', text: 'Persian', value: 'Persian' },
        //   { key: 'Polish', text: 'Polish', value: 'Polish' },
        //   { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },
        //   { key: 'Russian', text: 'Russian', value: 'Russian' },
        //   { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
        //   { key: 'Swedish', text: 'Swedish', value: 'Swedish' },
        //   { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
        //   { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' },
        // ]
      
        function loadGoogleTranslate(){
          new google.translate.TranslateElement("google_element");}
      
        const [sidebar, setSidebar] = useState(false)
      
        const showSidebar = () => setSidebar(!sidebar)
      
      
        const [myOptions, setMyOptions] = useState([])
      
      
      
      /*
          const GeoLocation = () => {
            const [details, setDetails] = useState(null);
        
            const getUserGeolocationDetails = () => {
                fetch(
                    "https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0"
                )
                    .then(response => response.json())
                    .then(data => setDetails(data));
                }
              }
      
      /*
      
      /*
          const items = [
            {
              id: 0,
              name: 'Cobol'
            },
            {
              id: 1,
              name: 'JavaScript'
            },
            {
              id: 2,
              name: 'Basic'
            },
            {
              id: 3,
              name: 'PHP'
            },
            {
              id: 4,
              name: 'Java'
            }
          ]
        
          const handleOnSearch = (string, results) => {
            // onSearch will have as the first callback parameter
            // the string searched and for the second the results.
            console.log(string, results)
          }
        
          const handleOnHover = (result) => {
            // the item hovered
            console.log(result)
          }
        
          const handleOnSelect = (item) => {
            // the item selected
            console.log(item)
          }
        
          const handleOnFocus = () => {
            console.log('Focused')
          }
        
          const formatResult = (item) => {
            return item;
      
          }
      */
      
      
      var a=1
         function Click(e){
          
      
            
            if(a==0){
            
            e.target.style.color = 'teal';
            e.target.style.backgroundColor='white'
              a = 1;
              
            }
            else{
              e.target.style.color = 'white';
              e.target.style.backgroundColor='teal'
              a = 0;
      
            }
            
        
            
        }
      
      
      
      
        return (
          <><div id="google_element"></div><IconContext.Provider value={{ color: 'teal' }}>

            <div className="navbar">



              <Link to="#" className='menu-bars'>

                <FaIcons.FaBars onClick={showSidebar} />


              </Link>

              {/* <div>
    <Button  size="lg" colorScheme="teal" mt="24px" onClick={GeoLocation()}>
     {`${details.city}`, `${details.country_name}(${details.country_code})`}
     Location
            </Button>

    </div> */}


              <HStack sx={{ marginLeft: '280px' }}>
                <Button className="But" sx={{ paddingRight: '30px', paddingLeft: '20px', backgroundColor: '#2ce2ff', color: 'black', border: '1.5px solid' }}>
                  <img src={location} alt="Logo" />
                  Mumbai
                </Button>

              </HStack>



              <Stack className="Search" spacing={4} sx={{ borderRadius: '20px', marginLeft: '30px' }}>


                {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
                <InputGroup size="md" sx={{ width: '500px', borderRadius: '20px', border: '1px solid gray' }}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.500" />} />
                  <Input placeholder="Search by City,State and pin" sx={{ borderRadius: '20px' }}

                    focusBorderColor="gray.500" />

                  {/* <InputRightAddon children="Search" sx={{borderRadius:'100px',border:'1px solid'}} focusBorderColor="black"/> */}
                  <InputRightElement width="4.5rem">
                    <Button size="sm" mr="3px" h="30px" sx={{ borderRightRadius: '100px', border: '0.1px solid gray' }}>
                      Search
                    </Button>
                  </InputRightElement>



                </InputGroup>
              </Stack>


              <Menu>
                <MenuButton ml={265} as={Button} leftIcon={<img className="language" src={language} alt="Logo"></img>}>
                  Select language
                </MenuButton>
                <MenuList>
                  <MenuItem>English</MenuItem>
                  <MenuItem>Hindi</MenuItem>
                  <MenuItem>Marathi</MenuItem>
                  <MenuItem>Tamil</MenuItem>
                  <MenuItem>Telugu</MenuItem>
                  <MenuItem>Bengali</MenuItem>
                  <MenuItem>Gujarati</MenuItem>
                  <MenuItem>Panjabi</MenuItem>
                  <MenuItem>kannada</MenuItem>
                </MenuList>
              </Menu>

              {/* <Dropdown

          style={{marginLeft:'150px',borderRadius:'10px', paddingTop:'75px'}}
          button
          className='icon'
          floating
          labeled
          icon='world'
          // options={languageOptions}
          search
          text='Select Language'
        /> */}




            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>


            <div>

              <div className="Filterss">

                <Menu>
                  <MenuButton as={Button} ml="1184px" rightIcon={<TriangleDownIcon />} sx={{ backgroundColor: 'white', border: '1px solid' }}>
                    Issue
                  </MenuButton>



                  <MenuList className="Issue" sx={{ bg: '#2ce2ff', padding: '20px', border: '1px solid' }}>

                    <Grid templateColumns="repeat(8, 1fr)" gap={6}>

                      <Button colorScheme="teal" variant="outline" onClick={Click}>
                        Dowry
                      </Button>

                      <Button colorScheme="teal" variant="outline" onClick={Click}>
                        Sexual Harrasment
                      </Button>

                      <Button colorScheme="teal" variant="outline" onClick={Click}>
                        Stalking
                      </Button>


                      <Button colorScheme="teal" variant="outline" onClick={Click}>
                        Child Marriage
                      </Button>

                      <Button colorScheme="teal" variant="outline" onClick={Click}>
                        Divorce
                      </Button>

                      <Button colorScheme="teal" variant="outline" onClick={Click}>
                        Rape
                      </Button>

                      <Button colorScheme="teal" variant="outline" onClick={Click}>
                        Domestic Violence
                      </Button>

                      <Button colorScheme="teal" variant="outline" onClick={Click}>
                        Cyber Bullying
                      </Button>



                      <Button colorScheme="teal" variant="outline" onClick={Click}>
                        Sexual Abuse
                      </Button>
                      <Button colorScheme="teal" variant="outline" onClick={Click}>
                        Stalking
                      </Button>
                      <Button colorScheme="teal" variant="outline" onClick={Click}>
                        Rape
                      </Button>
                      <Button colorScheme="teal" variant="outline" onClick={Click}>
                        Domestic Violence
                      </Button>

                      <Button colorScheme="teal" variant="outline" onClick={Click}>
                        Cyber Bullying
                      </Button>

                      <Button colorScheme="teal" variant="outline" onClick={Click}>
                        Sexual Abuse
                      </Button>

                      <Button colorScheme="teal" variant="outline" onClick={Click}>
                        Divorce
                      </Button>

                      <Button colorScheme="teal" variant="outline" onClick={Click}>
                        Domestic Violence
                      </Button>

                    </Grid>
                  </MenuList>

                </Menu><Menu closeOnSelect={false}>
                  <MenuButton as={Button} ml="30px" sx={{ backgroundColor: 'white', border: '1px solid' }} rightIcon={<img className="filter-image" src={filter} alt="Logo" />}>

                    More filters
                  </MenuButton>
                  <MenuList minWidth="240px">
                    <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
                      <MenuItemOption value="asc">Free</MenuItemOption>
                      <MenuItemOption value="desc">Paid</MenuItemOption>
                    </MenuOptionGroup>
                    <MenuDivider />
                    <MenuOptionGroup title="Type" type="checkbox">
                      <MenuItemOption value="email">Government</MenuItemOption>
                      <MenuItemOption value="phone">Government Funded</MenuItemOption>
                      <MenuItemOption value="country">Private</MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>

              </div>


            </div>



          </IconContext.Provider></>
      
      
      
      
      
          
      
      
      
      
      
      
        )
      }
      
      
      
      
      
      
      
      export default Navbar
      
      
      
      
      
      
      