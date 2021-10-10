import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [{
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
 }, 
// {
//     title: 'Reports',
//     path: '/reports',
//     icon: <IoIcons.IoIosAnalytics />,
//     cName: 'nav-text'
// }, 
{
    title: 'Get-Help',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
}, 
// {
//     title: 'Submit-Helpline',
//     path: '/team',
//     icon: <IoIcons.IoMdPeople/>,
//     cName: 'nav-text'
// }, 
{
    title: 'Feedback',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
}, {
    title: 'FAQ',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
},
{
    title: 'Submit-Helpline',
    path: '/Main_Home',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
},
{
    title: 'Post Search Page',
    path: '/post-page',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
}
]
