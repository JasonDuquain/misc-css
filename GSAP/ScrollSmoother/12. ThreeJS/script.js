gsap.registerPlugin(ScrollSmoother);

const SEPARATION = 100, AMOUNTX = 15, AMOUNTY = 15;
let container, stats;
let camera, scene, renderer;
let particles, particle, count = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function init() {
  container = document.createElement( 'div' );
  document.body.appendChild(container);
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.z = 1000; // Good var to change
  scene = new THREE.Scene();
  particles = new Array();
  var PI2 = Math.PI * 2;
  var geometry = new THREE.Geometry();
  var material = new THREE.SpriteMaterial({
    color: 'rgb(255,255,255)',
		// size: 0.25,
		map: new THREE.TextureLoader().load('./particle.jpg'),
		transparent: false,
		blending: THREE.AdditiveBlending,
		depthWrite: false
  });
  

  var i = 0;
  for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
    for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
      particle = particles[ i ++ ] = new THREE.Sprite( material );
      particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
      particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
      scene.add(particle);

      if (i > 0) {
        geometry.vertices.push( particle.position );
      }
    }
  }
  
  // var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
  //   color: 0xffffff,
  //   opacity: 0.5,
  //   linewidth: 4
  // }));
  // scene.add( line );

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  stats = new Stats();
  container.appendChild( stats.dom );
  window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
  requestAnimationFrame( animate );
  render();
  stats.update();
}

function render() {
  renderer.setClearColor( 0x07074e, 1);
  //camera.lookAt( scene.position );
  var i = 0;
  for (var ix = 0; ix < AMOUNTX; ix++) {
    for (var iy = 0; iy < AMOUNTY; iy++) {
      particle = particles[i++];
      particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
      particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;
    }
  }
  renderer.render(scene, camera);
  count += 0.1;
}

init();
animate();

// GSAP


var content = document.querySelector('#content'),
    select = document.getElementById("scrollto"),
    contentHeight = content.offsetHeight,
    maxOffset = contentHeight - window.innerHeight,
    a = (1-0)/(maxOffset-0),
    b = 1 - a * maxOffset,
    progress = 0;


var smoother = ScrollSmoother.create({
	wrapper: "#wrapper",
	content: "#content",
	smooth: 1,
	onUpdate: self => {
    progress = a * self.offset(self.wrapper(), 0) + b;
    camera.position.z = 1000 - progress * 1500;
    camera.position.y = Math.sin(progress * 4) * 100;
  }
});