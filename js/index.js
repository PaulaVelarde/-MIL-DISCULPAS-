function mySoundsLargos() {
  var x = Math.floor((Math.random() * 10) + 1);
    var sound = new Audio();
  switch (x) {
    case 1:
         sound.src = "residente1_largo.mp3";
         break;
    case 2:
         sound.src = "residente2_largo.mp3";
         break;
     case 3:
         sound.src = "residente3_largo.mp3";
         break;
    case 4:
         sound.src = "residente4_largo.mp3";
         break;
    case 5:
         sound.src = "residente5_largo.mp3";
         break;
    case 6:
         sound.src = "residente6_largo.mp3";
         break;
    case 7:
         sound.src = "residente7_largo.mp3";
         break;
    case 8:
         sound.src = "residente8_largo.mp3";
         break;
    case 9:
         sound.src = "residente9_largo.mp3";
         break;
    case 10:
         sound.src = "residente10_largo.mp3";
         break;

  }
    sound.play();

    if ( x == 1){
		document.getElementById("textoLargo").innerHTML = "Antes de empezar te voy a dar un par de puntos";
    }
    if ( x == 2){
		document.getElementById("textoLargo").innerHTML = "Tirarte a ti es como abusar de un";
    }
    if ( x == 3){
		document.getElementById("textoLargo").innerHTML = "Tirarte a ti es como dejar sin aire a un";
    }
    if ( x == 4){
		document.getElementById("textoLargo").innerHTML = "Es como jugar veo veo contra José";
    }
    if ( x == 5){
		document.getElementById("textoLargo").innerHTML = "Real son los estudiantes, los maestros";
    }
    if ( x == 6){
		document.getElementById("textoLargo").innerHTML = "Los boricuas que trabajan a 4.20 la";
    }
    if ( x == 7){
		document.getElementById("textoLargo").innerHTML = "Real son tus hijas, que sin ti fueron";
    }
    if ( x == 8){
		document.getElementById("textoLargo").innerHTML = "Y a pesar de que eres bruto todavía te siguen";
    }
    if ( x == 9){
		document.getElementById("textoLargo").innerHTML = "Por defender tu bandera en todas las";
    }
    if ( x == 10){
		document.getElementById("textoLargo").innerHTML = "Pregúntale a Paul McCartney que llena los";
    }
}

document.getElementById('soundbutton').addEventListener('click', mySoundsLargos);



function mySoundsCortos() {
  var x = Math.floor((Math.random() * 10) + 1);
    var sound = new Audio();
  switch (x) {
    case 1:
         sound.src = "residente1_corto.mp3";
         break;
    case 2:
         sound.src = "residente8_corto.mp3";
         break;
    case 3:
         sound.src = "residente9_corto.mp3";
         break;
    case 4:
         sound.src = "residente10_corto.mp3";
         break;
    case 5:
         sound.src = "residente2_corto.mp3";
         break;
    case 6:
         sound.src = "residente3_corto.mp3";
         break;
    case 7:
         sound.src = "residente4_corto.mp3";
         break;
    case 8:
         sound.src = "residente5_corto.mp3";
         break;
    case 9:
         sound.src = "residente6_corto.mp3";
         break;
    case 10:
         sound.src = "residente7_corto.mp3";
         break;
  }
    sound.play();

    if ( x == 1){
		document.getElementById("textoCorto").innerHTML = "validos";
    }
    if ( x == 2){
		document.getElementById("textoCorto").innerHTML = "queriendo";
    }
    if ( x == 3){
		document.getElementById("textoCorto").innerHTML = "esquinas";
    }
    if ( x == 4){
		document.getElementById("textoCorto").innerHTML = "coliseos";
    }
    if ( x == 5){
		document.getElementById("textoCorto").innerHTML = "invalido";
    }
    if ( x == 6){
		document.getElementById("textoCorto").innerHTML = "anciano";
    }
    if ( x == 7){
		document.getElementById("textoCorto").innerHTML = "Beliciano";
    }
    if ( x == 8){
		document.getElementById("textoCorto").innerHTML = "profesoras";
    }
    if ( x == 9){
		document.getElementById("textoCorto").innerHTML = "horas";
    }
    if ( x == 10){
		document.getElementById("textoCorto").innerHTML = "creciendo";
    }
}

document.getElementById('soundbutton2').addEventListener('click', mySoundsCortos);



var container;
var camera, scene, renderer;
var points;

init();
animate();

function init() {
	container = document.getElementById( 'container' );
				//
	camera = new THREE.PerspectiveCamera( 27, window.innerWidth / window.innerHeight, 5, 3500 );
	camera.position.z = 1750;
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x10021C );

	var particles = 5000;
	var geometry = new THREE.BufferGeometry();
	var positions = [];
	var colors = [];
	var color = new THREE.Color();
	var n = 1500, n2 = n / 4; // particles spread in the cube

	for ( var i = 0; i < particles; i ++ ) {
		// positions
		var x = Math.random() * n - n2;
		var y = Math.random() * n - n2;
		var z = Math.random() * n - n2;
		positions.push( x, y, z );
		// colors
		var vx = ( x / n ) + 0.6;
		var vy = ( y / n ) + 0.2;
		var vz = ( z / n ) + 0.;
		color.setRGB( vx, vy, vz );
		colors.push( color.r, color.g, color.b );
	}

	geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
	geometry.addAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
	geometry.computeBoundingSphere();
	
	

	var material = new THREE.PointsMaterial( { size: 15, vertexColors: THREE.VertexColors } );
	points = new THREE.Points( geometry, material );
	scene.add( points );
	


	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	


	window.addEventListener( 'resize', onWindowResize, false );
	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}
	
	function animate() {
		requestAnimationFrame( animate );
		render();
	}

	function render() {
		var time = Date.now() * 0.001;
		points.rotation.x = time * 0.060;
		points.rotation.y = time * 0.055;
		renderer.render( scene, camera );
	}


document.getElementById("myAudio").loop = true;
