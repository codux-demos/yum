import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';
import { Home } from '../../../components/home/home';

export default createBoard({
    name: 'Home',
    Board: () => (
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            top: 1,
            left: 0,
            right: 0,
        },
    },
});
