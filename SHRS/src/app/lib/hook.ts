"use client"
import { useInView } from "react-intersection-observer"
import { useActiveSectionContext } from "../context/active-section-context"
import { useEffect, useState } from "react"
import type { SectionName } from "../lib/types"




export function useSectionInView( sectionName: SectionName , threshold = 0.5) {
    const {ref, inView}  = useInView({threshold})
    const {setActiveSection, timeOfLastClick} = useActiveSectionContext()

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName)
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName])


    return {ref}
}


export const useScrollButton = (scrollLimit: number) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > scrollLimit) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollLimit]);

    return showButton;
};