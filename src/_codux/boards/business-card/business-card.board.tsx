import { createBoard } from '@wixc3/react-board';
import { BusinessCard } from '../../../components/business-card/business-card';

export default createBoard({
    name: '📦 BusinessCard',
    Board: () => (
        <BusinessCard
            title="Yum Cafe"
            description="A snug spot for friends, coffee, and conversation"
        />
    ),
    isSnippet: false,
    environmentProps: {
        canvasWidth: 460,
        windowBackgroundColor: '#dddddd',
    },
});
