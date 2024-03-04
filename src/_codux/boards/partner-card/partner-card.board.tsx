import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';
import { PartnerCard } from '../../../components/partner-card/partner-card';

export default createBoard({
    name: '📦 PartnerCard',
    Board: () => (
        <MemoryRouter>
            <PartnerCard />
        </MemoryRouter>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 371,
        windowBackgroundColor: '#eeeeee',
    },
});
