import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'Stores',
    Board: () => <MemoryRouter></MemoryRouter>,
    isSnippet: true,
});
