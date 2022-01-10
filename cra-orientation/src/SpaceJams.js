// this file contains the space Jams component 
// one component per file

function SpaceJams (){
    let count = 0;
    const onButtonClick = () => {
        console.log('moar jams!');
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
    <button onClick= {onButtonClick}>
        More SpaceJams
    </button>
     </div> 
    );
}

//default export of the file 
export default SpaceJams;


function render(state){
    $('#app').append(`
      <div class = "App"> 
      <img src= "${logoSrc}"/>
      </div>
    `)
  }