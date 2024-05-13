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
        path: '/owners',
        icon: <FaIcons.FaUser />,
        cName: 'nav-text'
    },
    {
        title: 'Leases',
        path: '/leases',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    }, 
    {
        title: 'Services',
        path: '/services',
        icon: <FaIcons.FaReceipt />,
        cName: 'nav-text'
    },
]