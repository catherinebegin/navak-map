// array of lanterns. Eventually, this will be data coming from the API
/*
const lanterns = [{
  "id": "c52e",
  "hostName": "esp32-66F2C0",
  "macAddress": "F0:08:D1:66:F2:C0",
  "ipAddress": "192.168.1.10",
  "startUniverse": 0,
  "status": true,
  "__v": 0,
  "pulse": 60,
  "group": 1,
  "rgb": "255, 0, 115"
}, {
  "id": "0a99",
  "hostName": "esp32-D2AE70",
  "macAddress": "BC:DD:C2:D2:AE:70",
  "ipAddress": "192.168.1.14",
  "startUniverse": 1,
  "status": false,
  "__v": 0,
  "pulse": 0,
  "group": 1,
  "rgb": "252, 186, 3"
}, {
  "id": "5a8e",
  "hostName": "esp32-66E53C",
  "macAddress": "F0:08:D1:66:E5:3C",
  "ipAddress": "192.168.1.11",
  "startUniverse": 3,
  "status": true,
  "__v": 0,
  "pulse": 89,
  "group": 1,
  "rgb": "236, 253, 10"
}]

const zones = [{
"_id": "624237da4891ba5fef51ec2b",
"id": "6f50",
"name": "ab01",
"x": "0",
"y": "7",
"z": "0",
"size": "5",
"group": "nv",
"param1": 0,
"param2": 0,
"param3": "0",
"__v": 0
},
{
"_id": "624237e34891ba5fef51ee5b",
"id": "ebf4",
"name": "ab02",
"x": "0.3",
"y": "12.5",
"z": "0",
"size": "5",
"group": "nv",
"param1": 0,
"param2": 0,
"param3": "0",
"__v": 0
},
{
"_id": "624237eb4891ba5fef51f05f",
"id": "2654",
"name": "ab03",
"x": "2.220118",
"y": "31.618479",
"z": "0",
"size": "5",
"group": "nv",
"param1": 0,
"param2": 0,
"param3": "0",
"__v": 0
},
{
"_id": "624238014891ba5fef51f5ab",
"id": "c6a9",
"name": "ab04",
"x": "0.9",
"y": "46",
"z": "0",
"size": "5",
"group": "nv",
"param1": 0,
"param2": 0,
"param3": "0",
"__v": 0
}]

*/

let lanterns = [];

(async function() {
  try {
    objs = await axios.get('http://192.168.1.209:8081/api/lanterns')
    lanterns = objs.data;
    await createLanternObjs();
    animate();
  } catch (error) {
    
    lanterns = [{
      "id": "c52e",
      "hostName": "esp32-66F2C0",
      "macAddress": "F0:08:D1:66:F2:C0",
      "ipAddress": "192.168.1.10",
      "startUniverse": 0,
      "status": true,
      "__v": 0,
      "pulse": 60,
      "group": 1,
      "rgb": "255, 0, 115"
    }, {
      "id": "0a99",
      "hostName": "esp32-D2AE70",
      "macAddress": "BC:DD:C2:D2:AE:70",
      "ipAddress": "192.168.1.14",
      "startUniverse": 1,
      "status": false,
      "__v": 0,
      "pulse": 0,
      "group": 1,
      "rgb": "252, 186, 3"
    }, {
      "id": "5a8e",
      "hostName": "esp32-66E53C",
      "macAddress": "F0:08:D1:66:E5:3C",
      "ipAddress": "192.168.1.11",
      "startUniverse": 3,
      "status": true,
      "__v": 0,
      "pulse": 89,
      "group": 1,
      "rgb": "236, 253, 10"
    }]
    
    const zones = [{
    "_id": "624237da4891ba5fef51ec2b",
    "id": "6f50",
    "name": "ab01",
    "x": "0",
    "y": "7",
    "z": "0",
    "size": "5",
    "group": "nv",
    "param1": 0,
    "param2": 0,
    "param3": "0",
    "__v": 0
    },
    {
    "_id": "624237e34891ba5fef51ee5b",
    "id": "ebf4",
    "name": "ab02",
    "x": "0.3",
    "y": "12.5",
    "z": "0",
    "size": "5",
    "group": "nv",
    "param1": 0,
    "param2": 0,
    "param3": "0",
    "__v": 0
    },
    {
    "_id": "624237eb4891ba5fef51f05f",
    "id": "2654",
    "name": "ab03",
    "x": "2.220118",
    "y": "31.618479",
    "z": "0",
    "size": "5",
    "group": "nv",
    "param1": 0,
    "param2": 0,
    "param3": "0",
    "__v": 0
    },
    {
    "_id": "624238014891ba5fef51f5ab",
    "id": "c6a9",
    "name": "ab04",
    "x": "0.9",
    "y": "46",
    "z": "0",
    "size": "5",
    "group": "nv",
    "param1": 0,
    "param2": 0,
    "param3": "0",
    "__v": 0
    }]

    return
  }
})();




const width = window.innerWidth;
const height = window.innerHeight;

// define the scene, and setup the camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 300);
camera.position.set(0, 0, 25);
camera.lookAt(new THREE.Vector3(0,0,0));






// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("#000000");
document.body.appendChild(renderer.domElement); //create canvas element (as a child of the body) with our renderer settings


// make responsive
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}




// geometry
// here, we define what we want to appear in the scene
const geometry = new THREE.CircleGeometry(0.2, 32, 32);
// *****APRIL 4 - circle geometry to sphere geometry? maybe its not properly rendering on resize because its not in 3d space? idk

const zoneGeometry = new THREE.CircleGeometry(30, 32);
const ringGeometry = new THREE.RingGeometry(0.2, 0.25, 32);




// objets des lanternes de three.js 
let lanternObj = []

// create lantern objects and add them to the scene
async function createLanternObjs(){

  return new Promise(async (resolve, reject) => {

    for (let i = 0; i < lanterns.length; i++){

      console.log(lanterns[i]);

      if (lanterns[i].status=== true){
      

      
      let lantern = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: new THREE.Color(`rgb(${lanterns[i].rgb})`)})); //geometry, material
      
    
      // give each lantern a random pos
     
      lantern.position.x = 0;
      lantern.position.y = 0;
      lantern.position.z = 0;
    
      // give the lantern a name which is its id
      lantern.name = lanterns[i].id;
    
      // give the lantern a userData of startUniverse
      lantern.userData.startUniverse = lanterns[i].startUniverse;
    
      // give the lantern a userData of pulse
      lantern.userData.pulse = lanterns[i].pulse;
    
      // give the lantern a userData of color
      lantern.userData.color = lanterns[i].rgb;
    
    
      // create a ring geometry on top of the lantern
      let ring = new THREE.Mesh(ringGeometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));
      ring.position.x = lantern.position.x;
      ring.position.y = lantern.position.y;
      ring.position.z = lantern.position.z -0.01;
      
      
      // now add them to the scene
      scene.add(lantern);
      scene.add(ring);
      // and add the lanterns to the lanternObj array to give it an identity
      lanternObj.push(lantern);
    }
  
  }
   resolve();

  })
}






let objs = [];

/*
scene.traverse((object) => {
if (object.isMesh) 
  console.log(object) 
})
*/




/*for (let i = 0; i < obj.length; i++) { 
  scene.add(obj[i]);
}*/

/*
const light = new THREE.AmbientLight(0xFFFFFF, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);
*/






// Set up zoom behavior
const zoom = d3.zoom()
  .scaleExtent([10, 300])
  .on('zoom', () => {
    const event = d3.event;
    if (event.sourceEvent) {

      // Get z from D3
      const new_z = event.transform.k;
     
      if (new_z !== camera.position.z) {
        
        // Handle a zoom event
        const { clientX, clientY } = event.sourceEvent;

        // Project a vector from current mouse position and zoom level
        // Find the x and y coordinates for where that vector intersects the new
        // zoom level.
        // Code from WestLangley https://stackoverflow.com/questions/13055214/mouse-canvas-x-y-to-three-js-world-x-y-z/13091694#13091694
        const vector = new THREE.Vector3(
          clientX / width * 2 - 1,
          - (clientY / height) * 2 + 1,
          1 
        );
        vector.unproject(camera);
        const dir = vector.sub(camera.position).normalize();
        const distance = (new_z - camera.position.z)/dir.z;
        const pos = camera.position.clone().add(dir.multiplyScalar(distance));
        
        // Set the camera to new coordinates
        camera.position.set(pos.x, pos.y, new_z);

      } else {

        // Handle panning
        const { movementX, movementY } = event.sourceEvent;

        // Adjust mouse movement by current scale and set camera
        const current_scale = getCurrentScale();
        camera.position.set(camera.position.x - movementX/current_scale, camera.position.y +
          movementY/current_scale, camera.position.z);
      }
    }
  });

// Add zoom listener
const view = d3.select(renderer.domElement);
view.call(zoom);

// Disable double click to zoom because I'm not handling it in Three.js
view.on('dblclick.zoom', null);

// Sync d3 zoom with camera z position
zoom.scaleTo(view, 125);


//raycaster

const raycaster = new THREE.Raycaster();

//Mouse

const mouse = new THREE.Vector2();

window.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  //console.log(mouse.x);
});





function animate() {


  // loop through lanterns and run the updateLantern function for each
  for (let index = 0; index < lanternObj.length; index++) {
    updateLantern(lanternObj[index]);
  }

  // Raycaster
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(lanternObj);
  //console.log(intersects);

  for(const intersect of intersects) {
    intersect.object.scale.set(1.75, 1.75, 1);
    document.getElementById("id").innerHTML = `<p>${intersect.object.name}</p>`;
    document.getElementById("startUniverse").innerHTML = `<p>${intersect.object.userData.startUniverse}</p>`;
    document.getElementById("pulse").innerHTML = `<p>${intersect.object.userData.pulse}</p>`;
    document.getElementById("color").innerHTML = `<p>${intersect.object.userData.color}</p>`;
    
  }

  for (const object of lanternObj) {
    if (!intersects.find(intersect => intersect.object === object)){
      object.scale.set(1, 1, 1);
    }
  }
  

  requestAnimationFrame(animate); //causes redraw every time the screen refreshes (every frame aka 60 times per second)

  renderer.render(scene, camera);
  /*
  for (let i = 0; i < obj.length; i++){
  console.log("🚀 ~ file: main.js ~ line 64 ~ animate ~ obj", obj[i]);
    obj[i].position.x = randomIntFromInterval(0, 10)
    obj[i].position.y = randomIntFromInterval(0, 10)
  }
  */
  

}
//animate();


// assign positions to the lanterns (the elm is each lantern in the array)
async function updateLantern(elm) {
  //console.log(elm);

  try {
    const response = await axios.get(`http://192.168.1.209:8081/api/lanterns/positions/${elm.name}`)
    if (response.data === "") {
      return
    }
    
    let positionParse = JSON.parse(response.data.position)
    pos = positionParse.position
    elm.position.x = pos.x * 2
    elm.position.y = pos.y * 2
    elm.position.z = pos.z


    // give the lantern a color **not sure if this works, test by changing the lantern color ~April 11th
    elm.material.color.set(response.data.color);


    
  } catch (error) {

    return
  }
}

// From https://github.com/anvaka/three.map.control, used for panning
function getCurrentScale() {
  var vFOV = camera.fov * Math.PI / 180
  var scale_height = 2 * Math.tan( vFOV / 2 ) * camera.position.z
  var currentScale = height / scale_height
  return currentScale
}



// utile -- miscellaneous useful functions
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
