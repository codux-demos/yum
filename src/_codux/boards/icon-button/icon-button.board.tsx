import { createBoard } from '@wixc3/react-board';
import { IconButton } from '../../../components/icon-button/icon-button';

export default createBoard({
    name: '🔩 IconButton',
    Board: () => <IconButton />,
    isSnippet: false,
    environmentProps: {
        windowBackgroundColor: '#dddddd',
    },
});
