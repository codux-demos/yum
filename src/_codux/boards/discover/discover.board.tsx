import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';
import { DiscoverPage } from '../../../components/discover-page/discover-page';
import { restaurants } from '../../../data/restaurants';
import { foodCategories } from '../../../data/food-categories';

export default createBoard({
    name: '📄 Discover Page',
    Board: () => (
        <MemoryRouter>
            <DiscoverPage data={restaurants} foodCategories={foodCategories} />
        </MemoryRouter>
    ),
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
        },
        windowWidth: 1400,
    },
});
