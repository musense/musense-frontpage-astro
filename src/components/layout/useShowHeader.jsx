import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
export default function useShowHeader() {

    const [showHeader, setShowHeader] = useState(true);
    useScrollPosition(({ prevPos, currPos }) => {
        if (currPos.y >= prevPos.y) {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    });

    return showHeader
}
