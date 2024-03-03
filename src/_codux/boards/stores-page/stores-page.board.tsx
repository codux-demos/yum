import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';
import { StoresPage } from '../../../components/stores-page/stores-page';

export default createBoard({
    name: '📄 Stores Page',
    Board: () => (
        <MemoryRouter>
            <StoresPage />
        </MemoryRouter>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
        },
    },
});
