import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';
import { Link } from '../../../components/link/link';

export default createBoard({
    name: '🔩 Link',
    Board: () => (
        <MemoryRouter>
            <Link />
        </MemoryRouter>
    ),
    isSnippet: false,
    environmentProps: {
        windowBackgroundColor: '#dddddd'
    }
});
