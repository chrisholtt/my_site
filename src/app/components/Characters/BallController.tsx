import Ball from "./Ball";
import { BallCollider, RigidBody } from "@react-three/rapier"
import { FlyControls, KeyboardControls } from "@react-three/drei";
import { useMemo } from "react";


const keyboardControls = {
    forward: "forward",
    back: "back",
    left: "left",
    right: "right",
    jump: "jump",
}


export default function BallController() {
    // const map = useMemo(() => [
    //     { name: FlyControls.forward, keys: ["ArrowUp", "keyW"] },
    //     { name: FlyControls.back, keys: ["ArrownDown", "KeyD"] },
    //     { name: FlyControls.left, keys: ["ArrowLeft", "KeyA"] },
    //     { name: FlyControls.right, keys: ["ArrowRight", "keyD"] },
    //     { name: FlyControls.jump, keys: ["Space"] },
    // ], [])


    return (
        <group>
            <RigidBody position-y={3} colliders={false} scale={1}>
                <BallCollider args={[1]} />
                <Ball />
            </RigidBody>

        </group>
    )
}