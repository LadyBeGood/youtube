import { useState } from 'react';
import BottomSheet from '../components/BottomSheet';

const NotFound = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    return (
        <>
            <BottomSheet isBottomSheetOpen={isSheetOpen} middle={100} onBottomSheetClose={() => setIsSheetOpen(false)}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo labore praesentium eaque! Assumenda, cumque. Accusamus tempore quos quo repellendus illum quod similique dicta quibusdam velit eveniet necessitatibus, rerum iure. Aliquam.
                Esse soluta, in, nostrum omnis molestias eaque ipsam sequi totam expedita laboriosam dicta nesciunt similique velit delectus ex adipisci ratione inventore officia aspernatur minus dolor quisquam dignissimos a. Temporibus, eos!
            </BottomSheet>
            <button onClick={() => setIsSheetOpen(true)}>ABC</button>
        </>
    );
}


export default NotFound