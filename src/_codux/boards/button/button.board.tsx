import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';

export default createBoard({
    name: '🔩 Button',
    Board: () => <Button variant="primary" />,
    isSnippet: false,
    environmentProps: {
        windowBackgroundColor: '#dddddd'
    }
});
