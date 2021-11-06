import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xff0000)

const camera1 = new THREE.PerspectiveCamera(
    30,
    1,
    .1,
    10000
)
const camera2 = new THREE.OrthographicCamera(-2,2,2,-2)
camera1.position.z = 2
camera2.position.z = 2

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

new OrbitControls(camera1, renderer.domElement)

//const geometry = new THREE.BoxGeometry()
const geometry = new THREE.TorusKnotGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
})

const cube = new THREE.Mesh(geometry, material)
cube.scale.x = .2
cube.scale.y = .2
cube.scale.z = .2
scene.add(cube)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera1.aspect = window.innerWidth / window.innerHeight
    camera1.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    render()
}

function render() {
    renderer.render(scene, camera1)
}

animate()
