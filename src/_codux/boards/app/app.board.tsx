import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';
import { LandingPage } from '../../../components/landing-page/landing-page';

export default createBoard({
    name: '🏠 App',
    Board: () => (
        // TODO: connect to real routes
        <MemoryRouter>
            <LandingPage />
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
