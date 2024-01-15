import { createBoard } from '@wixc3/react-board';
import { Restaurant } from '../../../components/restaurant/restaurant';

export default createBoard({
    name: 'RestaurantPage',
    Board: () => <Restaurant restaurantName="Restaurant Name" />,
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1
        }
    }
});
