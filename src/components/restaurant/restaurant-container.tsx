import { useParams } from 'react-router-dom';
import { Restaurant } from './restaurant';

export interface RestaurantContainerProps {}

export const RestaurantContainer = (props: RestaurantContainerProps) => {
    const { id } = useParams();
    return <Restaurant {...props} restaurantName={id ? id : 'Unknown Restaurant'} />;
};
