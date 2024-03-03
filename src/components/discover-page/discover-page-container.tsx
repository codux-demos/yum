import { DiscoverPage } from './discover-page';
import { foodCategories } from '../../data/food-categories';

export interface DiscoverPageContainerProps {}

export const DiscoverPageContainer = ({}: DiscoverPageContainerProps) => {
    return <DiscoverPage foodCategories={foodCategories} />;
};
