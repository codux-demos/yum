import { createBoard } from '@wixc3/react-board';
import { TeaserCard } from '../../../components/teaser-card/teaser-card';

export default createBoard({
    name: '📦 TeaserCard',
    Board: () => (
        <TeaserCard
            title="Good food is the foundation of genuine happiness"
            description="Discover how the choices on your plate can be the key to unlocking genuine happiness and fulfillment"
        />
    ),
    isSnippet: false,
    environmentProps: {
        canvasWidth: 535,
        windowBackgroundColor: '#eeeeee',
    },
});
