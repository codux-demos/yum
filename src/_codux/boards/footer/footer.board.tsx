import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from '../../../components/footer/footer';

export default createBoard({
    name: '📦 Footer',
    Board: () => (
        <MemoryRouter>
            <Footer />
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
        windowWidth: 1400,
        windowHeight: 900,
    },
});
