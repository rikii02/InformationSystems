import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { icon } from "@fortawesome/fontawesome-svg-core";

export const SidebarData = [
    {
        title: 'Properties',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Owners',
        path: '/',
        icon: <FaIcons.FaUser />,
        cName: 'nav-text'
    },
    {
        title: 'Leases',
        path: '/',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    }, 
    {
        title: 'Accounting',
        path: '/',
        icon: <FaIcons.FaReceipt />,
        cName: 'nav-text'
    },
]