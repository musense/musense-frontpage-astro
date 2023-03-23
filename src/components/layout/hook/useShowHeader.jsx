import { useEffect, useRef, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
export default function useShowHeader() {

    const clientWidthRef = useRef(null)

    useEffect(() => {
        if (clientWidthRef.current == null) {
            clientWidthRef.current =window.innerWidth
        }
    }, [clientWidthRef]);
    const [showHeader, setShowHeader] = useState(true);
    useScrollPosition(({ prevPos, currPos }) => {
        console.log("🚀 ~ file: useShowHeader.jsx:14 ~ useScrollPosition ~ prevPos:", prevPos.y)
        console.log("🚀 ~ file: useShowHeader.jsx:22 ~ useScrollPosition ~ clientWidthRef.current:", clientWidthRef.current)
        if (clientWidthRef.current < 768 && -prevPos.y < 100) return
        if (currPos.y >= prevPos.y) {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    });

    return showHeader
}
