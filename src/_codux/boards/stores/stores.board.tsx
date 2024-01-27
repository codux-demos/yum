import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';
import { Stores } from '../../../components/stores/stores';

export default createBoard({
    name: '📄 Stores',
    Board: () => (
        <MemoryRouter>
            <Stores data={[]} />
        </MemoryRouter>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
        },
    },
});
