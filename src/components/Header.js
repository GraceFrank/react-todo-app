import React from 'react';

function Header(){
    const dateTime = new Date();
    const hourOfDay = dateTime.getHours();
    let timeOfDay;

    
    if(hourOfDay >=12 && hourOfDay<17){
        timeOfDay = "Afternoon"
    }else if (hourOfDay >= 17){
        timeOfDay = "Evening"
    }else timeOfDay = 'Morning';

    return(
        
         <header style={{color: 'whitesmoke', fontStyle:"italic"}} className="graceNavigationBar">Good {`${timeOfDay} `} Grace</header>
    );
} 

export default Header;   