// select the container element in html
const container = document.querySelector('.container');

// create array of objectsfor POIs
const POIs = [
    {
        id: 1,
        name: 'Rebels Roost',
        popularity: 'high',
        medallion: true,
        vault: true
    },
    {
        id: 2,
        name: 'Lavish Lair',
        popularity: 'high',
        medallion: true,
        vault: true
    },
    {
        id: 3,
        name: 'Classy Courts',
        popularity: 'medium',
        medallion: false,
        vault: false
    },
    {
        id: 4,
        name: 'Ritzy Riviera',
        ppularity: 'medium',
        medallion: true,
        vault: false
    }
];

// function to loop through POIs array
// then add to DOM
function addPOItoDOM () {
    for (let i=0; i<POIs.length; i++) {
        // create element div
        const poi = document.createElement('div');

        // set the text content of each poi to the name of the poi
        // make all have an attribute of id=<id>
        poi.textContent = POIs[i].name;
        poi.setAttribute('id', POIs[i].id);

        container.appendChild(poi);
        setPosition();
        onCLickPOI(poi);
    }
    };

// action to take when poi is clicked
function whenClickedPOI() {

}

// add click event to each poi
function onCLickPOI(poi) {
    poi.addEventListener('click',whenClickedPOI);
};

// put POI names over appropriate poisition on the map
function setPosition() {
    if (document.getElementById(1).textContent === "Rebels Roost") {
        document.getElementById(1).style.position = "absolute";
        document.getElementById(1).style.backgroundColor = "blue";
        document.getElementById(1).style.fontSize = "12px";
        document.getElementById(1).style.top = "100px";
        document.getElementById(1).style.left= "125px";
    }
}



// initialize app
function init () {
    addPOItoDOM();
};

init();

console.log(document.getElementById(1).textContent)








