import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';
import { BusinessTypeFilterBar } from '../../../components/business-type-filter-bar/business-type-filter-bar';

export default createBoard({
    name: '📦 BusinessTypeFilterBar',
    Board: () => (
        <MemoryRouter>
            <BusinessTypeFilterBar />
        </MemoryRouter>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 0,
        },
        windowBackgroundColor: '#eeeeee',
    },
});
