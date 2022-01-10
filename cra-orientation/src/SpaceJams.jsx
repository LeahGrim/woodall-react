// this file contains the space Jams component 
// one component per file
//import'./SpaceJams.css';

import {useState} from 'react';

function SpaceJams (){
   // let count = 0;
    //Declare the count state variable
    //state variable is any data that can update the DOM 
   const [count, setCount] = useState(0);
   
   const[invaders, setInvaders] = useState('👾👾👾')
   const onButtonClick = () => {
        console.log('moar jams!');
        //increase value of count 
        //setCount sets the new value for the count variable 
        //and then ... re-render our component with the new state 
        //reRender(count);
        setCount(count + 1);
    }
    const addInvader = () => {
        //setting new value to the state variable
        setInvaders(invaders + '👾');
        
    }


    return (
        <div>
            <h2> Space Jams is Jamming in Space and Andre is their head Astronaut </h2>
            {/* any thing you want to render needs to be exported to our DOM and then needs to be imported in the app.js */}
            <img
            src= "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/09/12/12/space-jam-internet.jpg?width=990&auto=webp&quality=75&crop=982:726,smart"
            />
       
    <h2> How many Space Jams are there out there?</h2>
    <h3> There are {count} </h3>
    <h3> 👾 👾 👾 LOOK OUT, SPACE INVADERS!!!! {invaders} </h3>
    <button onClick= {onButtonClick}>
        More SpaceJams
    </button>

    <button onClick= {addInvader}> 
        MOAR EMOJIS 
    </button>
     </div> 
    );
}

//default export of the file 
export default SpaceJams;


