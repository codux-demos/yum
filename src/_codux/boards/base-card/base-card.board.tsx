import { createBoard } from '@wixc3/react-board';
import { BaseCard } from '../../../components/base-card/base-card';

export default createBoard({
    name: '📦 BaseCard',
    Board: () => <BaseCard />,
    isSnippet: false,
    environmentProps: {
        canvasWidth: 324,
        windowBackgroundColor: '#dddddd',
    },
});
