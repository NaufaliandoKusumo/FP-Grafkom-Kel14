
// Create a Scene
var scene = new THREE.Scene();

// Create a Camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Create a Renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.setClearColor( 0x777777, 0.3);

// For creating responsive game on resizing
window.addEventListener( 'resize', function()
{
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix( );
} );

// Lighning
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
loader.load('https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg' , function(texture)
            {
             scene.background = texture;  
            });

// Change the cube position
document.addEventListener ( 'keydown', Keyboard, false );

controls = new THREE.OrbitControls( camera, renderer.domElement );

// Create Shape
var geometry = new THREE.BoxGeometry( 0.95, 0.95, 0.95);

// Create a material, colour or image texture
var material = new THREE.MeshLambertMaterial({
    color: 0xd22f49,
    wireframe: false
});

var cube = new THREE.Mesh( geometry, material );
cube.position.x = 2;
cube.position.y = 2;
cube.position.z = 2;
scene.add( cube );

// Final Box
var selectedCubeGeometry = new THREE.BoxGeometry( 0.95, 0.95, 0.95);

// Create a material, colour or image texture
var selectedCubeMaterial = new THREE.MeshLambertMaterial( {
    color: 0x6ace01,
    transparent: true,
    opacity: 0.5,
    wireframe: false
} );
var selectedCube = new THREE.Mesh( selectedCubeGeometry,  selectedCubeMaterial );
selectedCube.position.x = -2;
selectedCube.position.y = 2;
selectedCube.position.z = 2;
scene.add( selectedCube );


// Create Shape
var outerBoxGeometry = new THREE.BoxGeometry( 5, 5, 5 );

// Create a material, colour or image texture
var outerBoxMaterial = new THREE.MeshLambertMaterial( {
    color: 0xffffff,
    transparent: true,
    opacity: 1,
    wireframe: true,
} );
var cubeouter = new THREE.Mesh( outerBoxGeometry, outerBoxMaterial );
scene.add( cubeouter );

// Chage position of the camera
camera.position.y = 2;
camera.position.z = 7;

// Create Shape
var fixedCubeGeometry = new THREE.BoxGeometry( 0.95, 0.95, 0.95 );

// Create a material, colour or image texture
var fixedCubeMaterial = new THREE.MeshLambertMaterial( { color: 0x5584AC, wireframe: false } );

// Positions of all fixed cubes
var fixedCubeCoordinates = [
    { x:-1, y:-1, z:-1 },
    { x:0, y:-1, z:-1 },
    { x:2, y:0, z:1 },
    { x:-1, y:-2, z:2 },
    { x:1, y:1, z:0 },
    { x:0, y:-1, z:0 },
    { x:0, y:-1, z:-1 },
    { x:1, y:0, z:-2 },
    { x:-1, y:1, z:0 },
    { x:-1, y:1, z:1 },
    { x:-1, y:1, z:-1 },
    { x:1, y:-1, z:1 },
    { x:2, y:2, z:1 },
    { x:2, y:1, z:2 },
    { x:0, y:2, z:2 },
    { x:0, y:2, z:1 },
    { x:1, y:2, z:0 },
    { x:0, y:1, z:1 },
    { x:0, y:0, z:1 },
    { x:0, y:0, z:2 },
    { x:2, y:-1, z:-1 },
    { x:2, y:1, z:0 },
    { x:0, y:2, z:0 },
    { x:-1, y:2, z:0 },
    { x:-1, y:2, z:-1 },
    { x:0, y:2, z:-1 },
    { x:1, y:2, z:-1 },

    { x:1, y:-1, z:2 },
    { x:-2, y:-1, z:2 },
    { x:-1, y:-1, z:1 },
    { x:2, y:-2, z:1 },
    { x:1, y:1, z:2 },
    { x:0, y:0, z:-2 },
    { x:-1, y:0, z:-2 },
    { x:1, y:0, z:0 },
    { x:2, y:-1, z:1 },
    { x:-1, y:-1, z:0 },
    { x:0, y:0, z:0 },
    { x:1, y:-1, z:-1 },

    { x:-2, y:1, z:-1 },
    { x:-2, y:0, z:-1 },
    { x:-2, y:-1, z:-1 },
    { x:-2, y:0, z:0 },
    { x:-2, y:0, z:1 },
    { x:-2, y:0, z:2 },

    { x:2, y:-2, z:-1 },
    { x:1, y:-2, z:1 },
    { x:0, y:-2, z:1 },
    { x:2, y:-2, z:-2 },
    { x:2, y:0, z:-2 },
    { x:2, y:1, z:-2 },
    { x:2, y:2, z:-2 },
    { x:1, y:2, z:-2 },
    { x:0, y:2, z:-2 },
    { x:-1, y:2, z:-2 },

    { x:2, y:-1, z:-2 },
    { x:0, y:-2, z:-2 },
    { x:0, y:-2, z:-1 },
    { x:0, y:-2, z:0 },

    { x:-1, y:1, z:-2 },
    { x:2, y:-2, z:-2 },
    { x:-2, y:-2, z:-1 },
    { x:-2, y:-1, z:0 },
    { x:-2, y:-1, z:1 },

    { x:-1, y:2, z:1 },
    { x:-2, y:2, z:1 },

    { x:-1, y:1, z:2 },
    { x:-1, y:2, z:2 },
    { x:-2, y:-2, z:-2 },
    { x:2, y:2, z:-1 },
    { x:2, y:2, z:0 },
];

function createNewMeshObject(x, y, z) {
    var fixedCube = new THREE.Mesh( fixedCubeGeometry, fixedCubeMaterial );
    fixedCube.position.x = x;
    fixedCube.position.y = y;
    fixedCube.position.z = z;
    return fixedCube;
}

fixedCubeCoordinates.map( box => {
    scene.add(
    createNewMeshObject(box.x, box.y, box.z)
    );
});


// Keyboard functions
function Keyboard() {
    var speed = 1;
    var old = {
    x: cube.position.x,
    y: cube.position.y,
    z: cube.position.z
    };

    if( event.keyCode == 65) { cube.position.x -= speed } // Left a
    else if( event.keyCode == 68) { cube.position.x += speed } // Right d
    else if( event.keyCode == 87) { cube.position.z -= speed } // Up w
    else if( event.keyCode == 83) { cube.position.z += speed } // Down s
    else if( event.keyCode == 80) { cube.position.y += speed } // In p
    else if( event.keyCode == 76) { cube.position.y -= speed } // Out l

    if ( cube.position.x > 2 || cube.position.y > 2 || cube.position.z > 2 || cube.position.x < -2 || cube.position.y < -2 || cube.position.z < -2 ){
    cube.position.x = old.x;
    cube.position.y = old.y;
    cube.position.z = old.z;
    }

    if ( cube.position.x == selectedCube.position.x && cube.position.y == selectedCube.position.y && cube.position.z == selectedCube.position.z ){
    cube.material.color.setHex(0x70A9A1);
    }

    fixedCubeCoordinates.map( box => {
    if (
        box.x === cube.position.x &&
        box.y === cube.position.y &&
        box.z === cube.position.z
    ) {
        cube.position.x = old.x;
        cube.position.y = old.y;
        cube.position.z = old.z;
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
    render();
};

GameLoop();

document.addEventListener('DOMContentLoaded', init, false);
