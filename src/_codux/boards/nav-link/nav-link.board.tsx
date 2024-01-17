import { createBoard } from '@wixc3/react-board';
import { MemoryRouter } from 'react-router-dom';
import { NavLink } from '../../../components/nav-link/nav-link';

export default createBoard({
    name: '🔩 NavLink',
    Board: () => (
        <MemoryRouter>
            <NavLink>Nav Link</NavLink>
        </MemoryRouter>
    ),
    isSnippet: false,
    environmentProps: {
        windowBackgroundColor: '#dddddd'
    }
});
