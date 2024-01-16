import { Restaurants } from './restaurants';

export interface RestaurantsContainerProps {}

export const RestaurantsContainer = ({}: RestaurantsContainerProps) => {
    return <Restaurants data={[]} />;
};
