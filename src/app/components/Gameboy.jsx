import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF, RoundedBox, Gltf, MeshStandardMaterial, Text, Sparkles, MeshPortalMaterial, useScroll, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'

export function Gameboy(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  const ref = useRef()
  const tl = useRef();
  const scroll = useScroll();

  useFrame(() => {

    // tl.current.seek()
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    // Animation
    // tl.current.to(
    //   ref.current.position,
    //   {
    //     duration: 10,
    //     x: -2
    //   },
    //   1
    // )

  }, [])

  return (
    <Float>
      <group {...props} dispose={null}>
        <mesh geometry={nodes.defaultMaterial.geometry} material={materials.DefaultMaterial} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1} ref={ref} />

        <RoundedBox
          args={[0, 0, 0]} // Width, height, depth. Default is [1, 1, 1]
          radius={0.05} // Radius of the rounded corners. Default is 0.05
          smoothness={4} // The number of curve segments. Default is 4
          creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
          position={[0, 1.3, 1]}
        >
          <Text
            scale={[0.1, 0.1, 0.1]}
            color="lime" // default
            anchorX="center" // default
            anchorY="middle" // default
            position={[0.15, 0, -0.4]}
            maxWidth={12}

          >
            $ --- WELCOME ---                  $ npx create-next-app potfolio_site                            $ yarn install three drie spring socket.io                 $yarn run dev
          </Text>
          {/* <meshPhongMaterial /> */}
        </RoundedBox>
      </group>
    </Float>
  )
}

useGLTF.preload('/scene-transformed.glb')
