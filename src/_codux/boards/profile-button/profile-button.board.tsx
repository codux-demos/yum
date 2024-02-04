import { createBoard } from '@wixc3/react-board';
import { ProfileButton } from '../../../components/profile-button/profile-button';

export default createBoard({
    name: 'ProfileButton',
    Board: () => <ProfileButton />,
    isSnippet: false,
});
