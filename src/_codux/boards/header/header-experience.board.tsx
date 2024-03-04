import { createBoard } from '@wixc3/react-board';
import { HeaderContainer } from '../../../components/header/header-container';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: '📦 Header Experience',
    Board: () => {
        return (
            <MemoryRouter>
                <HeaderContainer />
            </MemoryRouter>
        );
    },
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 0,
        },
        windowWidth: 1400,
        windowHeight: 900,
    },
});
