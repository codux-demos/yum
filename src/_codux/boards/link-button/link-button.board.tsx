import { createBoard } from '@wixc3/react-board';
import { LinkButton } from '../../../components/link-button/link-button';

export default createBoard({
    name: '🔩 LinkButton',
    Board: () => <LinkButton>Link Button</LinkButton>,
    isSnippet: false,
    environmentProps: {
        windowBackgroundColor: '#eeeeee',
    },
});
