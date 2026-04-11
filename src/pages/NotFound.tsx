import { useState } from 'react';
import BottomSheet from '../components/BottomSheet';

export default function NotFound() {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    return (
        <>
            Page not found
        </>
    );
}

