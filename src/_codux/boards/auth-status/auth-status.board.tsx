import { createBoard } from '@wixc3/react-board';
import { AuthStatus } from '../../../components/header/auth-status/auth-status';

export default createBoard({
    name: 'AuthStatus',
    Board: () => <AuthStatus />,
    isSnippet: false,
    environmentProps: {
        windowBackgroundColor: '#dddddd'
    }
});
