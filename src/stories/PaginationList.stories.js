import {fn} from '@storybook/test'
import PaginationList from '../components/PaginationList'
import UserCard from "../components/UserCard";
import * as React from "react";

export default {
    title: 'PaginationList',
    component: PaginationList,
    parameters: {
        layout: 'fullscreen',
        backgroundColor: {
            default:'#ffffff',
            values:[
                {name:'light', value:'#ffffff'}
            ]
        },
    },
    tags:['autodocs'],
}

export const Default = {
    args:{
        renderItem: (item, index) => <UserCard user={item} />,
    }
}

export const CircularOutlined = {
    args:{
        renderItem: (item, index) => <UserCard user={item} />,
        variant:'outlined',
        shape:'circular',
        size:'small',
    }
}

export const RoundedOutlined = {
    args:{
        renderItem: (item, index) => <UserCard user={item} />,
        variant:'outlined',
        shape:'rounded',
        size:'small',
    }
}

export const RoundedText = {
    args:{
        renderItem: (item, index) => <UserCard user={item} />,
        variant:'text',
        shape:'rounded',
        size:'small',
    }
}

