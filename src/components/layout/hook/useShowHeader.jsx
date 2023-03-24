import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import useClientWindowWidth from './useClientWindowWidth';
export default function useShowHeader() {

    const clientWindowWidth = useClientWindowWidth()
    const [showHeader, setShowHeader] = useState(true);
    useScrollPosition(({ prevPos, currPos }) => {
        // console.log("🚀 ~ file: useShowHeader.jsx:14 ~ useScrollPosition ~ prevPos:", prevPos.y)
        // console.log("🚀 ~ file: useShowHeader.jsx:22 ~ useScrollPosition ~ clientWindowWidth:", clientWindowWidth)
        if (clientWindowWidth < 768 && -prevPos.y < 100) return
        if (currPos.y >= prevPos.y) {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    });

    return showHeader
}
