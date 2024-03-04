import { createBoard } from '@wixc3/react-board';
import { Dialog } from '../../../components/dialog/dialog';
import { useDialogStore } from '@ariakit/react';

export default createBoard({
    name: '🔩 Dialog',
    Board: () => {
        const dialog = useDialogStore({ open: true });
        return (
            <Dialog dismissible={true} store={dialog}>
                <h1>Dialog title</h1>
                <p>
                    We all eat, and it would be a sad waste of opportunity to eat badly. Every meal
                    should be a moment of joy and celebration, a delightful journey through tastes
                    and aromas.
                </p>
            </Dialog>
        );
    },
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 0,
        },
        windowWidth: 1400,
        windowHeight: 900,
    },
});
