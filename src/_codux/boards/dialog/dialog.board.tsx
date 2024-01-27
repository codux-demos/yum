import { createBoard } from '@wixc3/react-board';
import { Dialog } from '../../../components/dialog/dialog';
import { useDialogStore } from '@ariakit/react';

export default createBoard({
    name: '🔩 Dialog',
    Board: () => {
        const dialog = useDialogStore({ open: true });
        return <Dialog dismissible={true} store={dialog} />;
    },
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
        },
        windowWidth: 1024,
    },
});
