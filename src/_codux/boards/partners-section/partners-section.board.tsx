import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';
import { PartnersSection } from '../../../components/partners-section/partners-section';

export default createBoard({
    name: '📦 PartnersSection',
    Board: () => (
        <MemoryRouter>
            <PartnersSection />
        </MemoryRouter>
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
        },
    },
});
