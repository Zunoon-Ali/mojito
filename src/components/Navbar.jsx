import React, { useRef } from 'react'
import { navlink } from '../../constant/index.js'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Navbar() {
    const navRef = useRef(null)

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',      // use Hero section as trigger
                start: 'bottom top',   // when hero bottom hits top of viewport
                toggleActions: 'play none none reverse',
            },
        })

        navTween.fromTo(
            navRef.current,
            {
                backgroundColor: 'transparent', // default no bg
                backdropFilter: 'none',
            },
            {
                backgroundColor: '#000000',    // background on scroll
                backdropFilter: 'blur(20px)',
                duration: 1,
                ease: 'power1.inOut',
            }
        )
    }, [])

    return (
        <nav ref={navRef} className="fixed w-full top-0 left-0 z-50">
            <div className="flex justify-between items-center px-6 py-4">
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
                    <p className="text-white font-bold">Volvet Pour</p>
                </a>
                <ul className="flex gap-4 text-white">
                    {navlink.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
