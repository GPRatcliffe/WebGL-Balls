let scene, camera, renderer, redBall, yellowBall

function init(){
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15
    camera.position.set(0, 12, 30)
    camera.rotation.z = 0
    camera.rotation.x = -0.2
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    
    document.body.appendChild(renderer.domElement)
    
    const redgeo = new THREE.SphereGeometry( 3, 45, 45 )
    const redmat = new THREE.MeshPhongMaterial({
        color: 0xCC2936,
        specular: 0x111111,
        shininess: 100
    })
    redBall = new THREE.Mesh( redgeo, redmat )

    const yellowgeo = new THREE.SphereGeometry( 3, 45, 45 )
    const yellowmat = new THREE.MeshPhongMaterial({
        color: 0xffb700,
        specular: 0x111111,
        shininess: 100
    })
    yellowBall = new THREE.Mesh( yellowgeo, yellowmat )
    yellowBall.position.set(-12, 0, -22)
    // position set - x, y, z

    /* LIGHTING */
    var ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.3 );

    const spotLight = new THREE.SpotLight( 0xffffff, 1 )
    spotLight.position.set(10, 20, 10)
    spotLight.castShadow = true


    /* MAKING A SCENE */
    scene.add( redBall )
    scene.add( yellowBall )
    scene.add( ambientLight )
    scene.add( spotLight )
}

function addBall(){
    let theBall

    scene.add( theBall )
}






function animate(){
    requestAnimationFrame(animate)

    // if(camera.position.z > 10){
    //     camera.position.z -= 1
    //     camera.updateProjectionMatrix()
    // }

    renderer.render(scene, camera)
}





function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', onWindowResize, false)

init()
animate()