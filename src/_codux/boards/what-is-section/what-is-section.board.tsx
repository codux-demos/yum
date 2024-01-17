import { createBoard } from '@wixc3/react-board';
import { WhatIsSection } from '../../../components/what-is-section/what-is-section';

export default createBoard({
    name: '📦 WhatIsSection',
    Board: () => <WhatIsSection />,
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1
        }
    }
});
