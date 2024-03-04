import { createBoard } from '@wixc3/react-board';
import { LoginForm } from '../../../components/login-form/login-form';
import { Dialog } from '../../../components/dialog/dialog';
import { useDialogStore } from '@ariakit/react';

export default createBoard({
    name: '📦 LoginForm',
    Board: () => {
        const dialog = useDialogStore({ open: true });
        return (
            <Dialog store={dialog} dismissible>
                <LoginForm />
            </Dialog>
        );
    },
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 0,
        },
    },
});
