import { createBoard } from '@wixc3/react-board';
import { TeaserCard } from '../../../components/teaser-card/teaser-card';

export default createBoard({
    name: '🔩 TeaserCard',
    Board: () => (
        <TeaserCard
            title="Teaser card title Teaser card title Teaser card title"
            description="Yum: A symphony of tastes, delivered directly to your door Yum: A symphony of tastes, delivered directly to your door Yum: A symphony of tastes, delivered directly to your door"
        />
    ),
    isSnippet: false,
    environmentProps: {
        canvasWidth: 593,
        windowBackgroundColor: '#dddddd',
    },
});
