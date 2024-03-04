import { createBoard } from '@wixc3/react-board';
import { RestaurantPage } from '../../../components/restaurant-page/restaurant-page';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: '📄 Restaurant Page',
    Board: () => (
        <MemoryRouter>
            <RestaurantPage restaurantName="Restaurant Name" />
        </MemoryRouter>
    ),
    isSnippet: false,
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
