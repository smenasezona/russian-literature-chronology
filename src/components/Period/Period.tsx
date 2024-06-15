import React from "react";
import {useRef} from "react";
import {useEffect} from "react";
import * as THREE from 'three'
import {Html} from "@react-three/drei";
import SubPeriod from "../SubPeriod/SubPeriod.tsx";
import {extend} from "@react-three/fiber";

type PeriodProps = {
    period: any,
    index: number
}

extend({BoxBufferGeometry: THREE.BufferGeometry})

const Period: React.FC<PeriodProps> = ({period, index}) => {

    const ref = useRef<THREE.Group>(null)

    useEffect(() => {
        if (ref.current) {
            ref.current.position.y = index * 3
        }
    }, [index]);

    return (
        <group ref={ref}>
            <mesh position={[0, 0, 0]}>
                <boxBufferGeometry args={[2, 1, 0.1]}/>
                <meshStandardMaterial color="lightblue"/>
                <Html position={[0, 0, 0.1]} center>
                    <div className="label">{period.content}</div>
                </Html>
            </mesh>
            {period.subgroup &&
                period.subgroup.map((subgroup: any, subIndex: number) => (
                    <SubPeriod key={subgroup.id} subPeriod={subgroup} index={subIndex}/>
                ))}
        </group>
    )
}

export default Period