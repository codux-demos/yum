import { createBoard } from '@wixc3/react-board';
import { Select } from '../../../components/select/select';

export default createBoard({
    name: 'Select',
    Board: () => <Select label="Select" items={['Hello', 'World']} />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#eeeeee',
    },
});
