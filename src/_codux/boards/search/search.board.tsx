import { createBoard } from '@wixc3/react-board';
import { Search } from '../../../components/search/search';

export default createBoard({
    name: '📦 Search',
    Board: () => <Search placeholder="Search in Yum" />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 600,
    },
});
