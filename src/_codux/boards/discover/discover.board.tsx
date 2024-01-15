import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';
import { Discover } from '../../../components/discover/discover';
import { restaurants } from '../../../data/restaurants';

export default createBoard({
    name: 'Discover Page',
    Board: () => (
        <MemoryRouter>
            <Discover data={restaurants} />
        </MemoryRouter>
    ),
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
        },
        windowWidth: 1024,
    },
});
