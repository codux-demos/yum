import { createBoard } from '@wixc3/react-board';
import { BaseButton } from '../../../components/base-button/base-button';

export default createBoard({
    name: 'BaseButton',
    Board: () => (
        <BaseButton disabled onClick={() => alert('hello world')}>
            Label
        </BaseButton>
    ),
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#eeeeee',
    },
});
