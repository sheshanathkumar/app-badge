import React from 'react'
import './badge.css'
import { SiAngular, SiApachemaven, SiGradle, SiSpring, SiSpringboot } from 'react-icons/si'

export function Spring() {
    return (
        <>

            <div className='badge'>

                <div className='spring'>
                    <SiSpring /> SPRING
                </div>
            </div>
        </>
    )
}

export function SpringBoot() {
    return (
        <>
            <div className='badge'>
                <div className='spring'>
                    <SiSpringboot /> SPRINGBOOT
                </div>
            </div>
        </>
    )
}

export function Angular() {
    return (
        <>
            <div className='badge'>
                <div className='angular'>
                    <SiAngular /> ANGULAR
                </div>
            </div>
        </>
    )
}

export function Gradle() {
    return (
        <>
            <div className='badge'>
                <div className='gradle'>
                    <SiGradle /> GRADLE
                </div>
            </div>
        </>
    )
}

export function Maven() {
    return (
        <>
            <div className='badge'>
                <div className='maven'>
                    <SiApachemaven /> MAVEN
                </div>
            </div>
        </>
    )
}