import React, { Component } from "react";
import { hashHistory } from 'react-router';



export default{
    gotoIndex:()=>{

        hashHistory.push(router)
    
    },
    getLastPage:()=>{

        //TODO
        return null ;
    
    },
    go:(page) =>{
         hashHistory.push(router)
    
    }
};