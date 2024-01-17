import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '../../../components/header/header';

export default createBoard({
    name: '📦 Header',
    Board: () => {
        return (
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
    },
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
        },
        windowBackgroundColor: '#dddddd'
    },
});
