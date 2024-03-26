import React from 'react'

const useCardHover = () => {
    const event=function(status){
        
        return setTimeout(()=>{console.log("time out called")},2000)
    }
    let tempE;
   
    function setTime(){
        tempE=event()
        console.log(tempE)
        clearTimeout(tempE)
        console.log(tempE)
    }
    function removeTime(){
        console.log(tempE)
        clearTimeout(tempE)
    }
    return [setTime,removeTime]
}

export default useCardHover

/*
    function will return the set timoiu

*/