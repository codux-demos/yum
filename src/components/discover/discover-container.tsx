import { Discover } from './discover';
import { foodCategories } from '../../data/food-categories';

export interface DiscoverContainerProps {}

export const DiscoverContainer = ({}: DiscoverContainerProps) => {
    return <Discover data={[]} foodCategories={foodCategories} />;
};
