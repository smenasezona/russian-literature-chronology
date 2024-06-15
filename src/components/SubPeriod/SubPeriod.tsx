import React from "react";
import {useRef} from "react";
import {useEffect} from "react";
import * as THREE from 'three'
import {Html} from "@react-three/drei";
import {extend} from '@react-three/fiber'


type SubPeriodProps = {
    subPeriod: any,
    index: number
}

extend({BoxBufferGeometry: THREE.BufferGeometry});

const SubPeriod: React.FC<SubPeriodProps> = ({subPeriod, index}) => {
    const ref = useRef<THREE.Group>(null)

    useEffect(() => {
        if (ref.current) {
            ref.current.position.y = index * -1.5
            ref.current.position.x = 2.5
        }
    }, [index]);

    return (
        <group ref={ref}>
            <mesh position={[0, 0, 0]}>
                <boxBufferGeometry args={[1.5, 0.75, 0.1]}/>
                <meshStandardMaterial color='lightgreen'/>
                <Html position={[0, 0, 0.1]} center>
                    <div className={'label'}>{subPeriod.title}</div>
                </Html>
            </mesh>
        </group>
    )
}

export default SubPeriod
