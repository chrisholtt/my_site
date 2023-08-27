import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { useGLTF, RoundedBox, Gltf, MeshStandardMaterial, Text, Sparkles, MeshPortalMaterial, useScroll, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { useTheme } from "next-themes";

export function Gameboy(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb');
  const { theme, setTheme } = useTheme();
  const ref = useRef();

  const [scrollY, setScrollY] = useState(window.scrollY)

  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    ref.current.rotation.y = scrollY * 0.005
    ref.current.position.y = scrollY * 0.01
  }, [scrollY])

  const Screen = () => {
    return (
      <RoundedBox
        args={[1.5, 1.3, 0]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.05} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        position={[0.035, 1.2, 0.55]}
      >
        <meshPhongMaterial color={theme == 'dark' ? '#000000' : '#ffffff'} />
      </RoundedBox>
    )
  }

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials.DefaultMaterial} scale={1} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Screen />
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
      </RoundedBox>
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
