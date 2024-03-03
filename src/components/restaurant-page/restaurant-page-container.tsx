import { useParams } from 'react-router-dom';
import { RestaurantPage } from './restaurant-page';

export interface RestaurantContainerProps {}

export const RestaurantContainer = (props: RestaurantContainerProps) => {
    const { id } = useParams();
    return <RestaurantPage {...props} restaurantName={id ? id : 'Unknown Restaurant'} />;
};
