import { RestaurantsPage } from './restaurants-page';
import { restaurants } from '../../data/restaurants';

export interface RestaurantsPageContainerProps {}

export const RestaurantsPageContainer = ({}: RestaurantsPageContainerProps) => {
    return <RestaurantsPage restaurants={restaurants} />;
};
