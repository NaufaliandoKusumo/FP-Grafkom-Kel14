let current = document.querySelector("#score_id");

var modal = document.getElementById("myModal");

// Create a Scene
var scene = new THREE.Scene();

// Create a Camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Create a Renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.setClearColor( 0x777777, 0.3);

window.addEventListener( 'resize', function()
{
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix( );
} );

// Lighting
ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.2 );
scene.add( ambientLight );

hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.2);
scene.add( hemisphereLight );

directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
directionalLight.position.set( 10, 10, 10 );
directionalLight.castShadow = true;
scene.add( directionalLight );

spotLight1 = new THREE.SpotLight( 0xffffff, 0.4 );
spotLight1.position.set( 100, -100, 100 );
spotLight1.castShadow = true;
spotLight1.shadowDarkness = 0.2;
scene.add( spotLight1 );

spotLight2 = new THREE.SpotLight( 0xffffff, 0.4 );
spotLight2.position.set( 100, 100, 100 );
spotLight2.castShadow = true;
spotLight2.shadowDarkness = 0.2;
scene.add( spotLight2 );

spotLight3 = new THREE.SpotLight( 0xffffff, 0.4 );
spotLight3.position.set( -100, 100, -100 );
spotLight3.castShadow = true;
spotLight3.shadowDarkness = 0.2;
scene.add( spotLight3 );

spotLight4 = new THREE.SpotLight( 0xffffff, 0.4 );
spotLight4.position.set( -100, 100, -100 );
spotLight4.castShadow = true;
spotLight4.shadowDarkness = 0.2;
scene.add( spotLight4 );

//Load background texture
const loader = new THREE.TextureLoader();
loader.load("img/space_bg2.jpeg" , function(texture)
            {
             scene.background = texture;  
            });

// Change the cube position
document.addEventListener ( 'keydown', Keyboard, false );

controls = new THREE.OrbitControls( camera, renderer.domElement );

// Create Shape
// var geometry = new THREE.BoxGeometry( 0.95, 0.95, 0.95);
// var material = new THREE.MeshPhysicalMaterial({
//     color: 0xFF5677, 
//     metalness: 1, 
//     roughness: 0.5, 
//     clearcoat: 1
// });
// var cube = new THREE.Mesh( geometry, material );
// cube.position.x = 1;
// cube.position.y = 1;
// cube.position.z = 1;
// scene.add( cube );

var geometry = new THREE.ConeGeometry( 0.3, 0.9, 10 );
var material = new THREE.MeshPhysicalMaterial( {
    color: 0xffff00,
    metalness: 1, 
    roughness: 0.5, 
    clearcoat: 1
} );
var cone = new THREE.Mesh( geometry, material );
cone.position.x = 1;
cone.position.y = 1;
cone.position.z = 1;
cone.rotation.x = Math.PI/-2;
scene.add( cone );

// Final Box
var selectedCubeGeometry = new THREE.BoxGeometry( 0.95, 0.95, 0.95);

// Create a material, colour or image texture
var selectedCubeMaterial = new THREE.MeshPhongMaterial( {
    color: 0x6ace01,
    transparent: true,
    opacity: 0.5,
    wireframe: false
} );

var selectedCube = new THREE.Mesh( selectedCubeGeometry,  selectedCubeMaterial );
selectedCube.position.x = 1;
selectedCube.position.y = -1;
selectedCube.position.z = -1;
scene.add( selectedCube );


// Create Shape
var outerBoxGeometry = new THREE.BoxGeometry( 3, 3, 3 );

// Create a material, colour or image texture
var outerBoxMaterial = new THREE.MeshLambertMaterial( {
    color: 0xffffff,
    transparent: true,
    opacity: 0,
    wireframe: true,
} );
var cubeouter = new THREE.Mesh( outerBoxGeometry, outerBoxMaterial );
scene.add( cubeouter );

// Chage position of the camera
camera.position.y = 2;
camera.position.z = 7;

// Create Shape
var fixedObstacleGeometry = new THREE.OctahedronGeometry(0.5, 5);

// load a texture, set wrap mode to repeat
const texture = new THREE.TextureLoader().load( "img/texture1.jpeg" );

// Create a material, colour or image texture
var fixedObstacleMaterial = new THREE.MeshPhongMaterial( { map:texture } );

// Positions of all fixed obstacle
var fixedObstacleCoordinates = [
    { x:-1, y:-1, z:-1 },
    { x: 0, y:-1, z:-1 },
    { x: 1, y:0, z:1 },
    { x: 0, y:0, z:1 },
    { x: 1, y:1, z:0 },
    { x: -1, y:-1, z:0 },
    { x: 0, y:-1, z:-1 },
    { x: 1, y:0, z:-1 },
    { x: -1, y:1, z:0 },
    { x: -1, y:1, z:1 },
    { x: 0, y:0, z:0 },
    { x: -1, y:1, z:-1 },
    { x: 1, y:-1, z:1 },
];

// const objLoader = new OBJLoader()
// objLoader.load(
//     'asset/intergalactic/Intergalactic.obj',
//     (object) => {
//         // (object.children[0] as THREE.Mesh).material = material
//         // object.traverse(function (child) {
//         //     if ((child as THREE.Mesh).isMesh) {
//         //         (child as THREE.Mesh).material = material
//         //     }
//         // })
//         scene.add(object)
//     },
//     (xhr) => {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
//     },
//     (error) => {
//         console.log(error)
//     }
// )

// var mtlLoader = new THREE.MTLLoader();
// mtlLoader.setPath('asset/intergalactic/');
// mtlLoader.load('Intergalactic_Spaceship-(Wavefront).mtl', function(materials) {
//   materials.preload();
//   var objLoader = new THREE.OBJLoader();
//   objLoader.setMaterials(materials);
//   objLoader.setPath('asset/intergalactic/');
//   objLoader.load('Intergalactic.obj', function(object) {
//     object.position.y = -95;
//     scene.add(object);
//   }, onProgress, onError);
// });

function createNewMeshObject(x, y, z) {
    var fixedObstacle = new THREE.Mesh( fixedObstacleGeometry, fixedObstacleMaterial );
    fixedObstacle.position.x = x;
    fixedObstacle.position.y = y;
    fixedObstacle.position.z = z;
    return fixedObstacle;
}

fixedObstacleCoordinates.map( box => {
    scene.add(
    createNewMeshObject(box.x, box.y, box.z)
    );
});

var score = 0;

// Keyboard functions
function Keyboard() {
    var speed = 1;
    var old = {
        x: cone.position.x,
        y: cone.position.y,
        z: cone.position.z
    };

    if( event.keyCode == 65) { cone.position.x -= speed; score++; current.innerHTML = score;} // a
    else if( event.keyCode == 68) { cone.position.x += speed; score++; current.innerHTML = score; } // d
    else if( event.keyCode == 87) { cone.position.z -= speed; score++; current.innerHTML = score; } // w
    else if( event.keyCode == 83) { cone.position.z += speed; score++; current.innerHTML = score; } // s
    else if( event.keyCode == 75) { cone.position.y += speed; score++; current.innerHTML = score; } // k
    else if( event.keyCode == 77) { cone.position.y -= speed; score++; current.innerHTML = score; } // m

    if ( cone.position.x > 1 || cone.position.y >1 || cone.position.z > 1 || cone.position.x < -1 || cone.position.y < -1 || cone.position.z < -1 ){
        cone.position.x = old.x;
        cone.position.y = old.y;
        cone.position.z = old.z;
        score--;
        current.innerHTML = score;
    }

    if ( cone.position.x == selectedCube.position.x && cone.position.y == selectedCube.position.y && cone.position.z == selectedCube.position.z ){
        cone.material.color.setHex(0x70A9A1);
        controls.autoRotate = true;
        controls.autoRotateSpeed = 10.0;

        modal.style.display = "block";

        var delayInMilliseconds = 6000;

        setTimeout(function() {
            location.href = "index.html";
        }, delayInMilliseconds);
        
    }

    fixedObstacleCoordinates.map( box => {
    if (
        box.x === cone.position.x &&
        box.y === cone.position.y &&
        box.z === cone.position.z
    ) {
        cone.position.x = old.x;
        cone.position.y = old.y;
        cone.position.z = old.z;
        score--;
        current.innerHTML = score;
    }
    });
}

// Draw Scene
var render = function()
{
    renderer.render( scene, camera );
};

// Run Game Loop ( Update, render, Repeat )
var GameLoop = function()
{
    requestAnimationFrame( GameLoop );
    controls.update();
    render();
};

GameLoop();

