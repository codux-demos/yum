import { createBoard } from '@wixc3/react-board';
import { CitiesSection } from '../../../components/cities-section/cities-section';

export default createBoard({
    name: 'CitiesSection',
    Board: () => <CitiesSection />,
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1
        },
        windowBackgroundColor: '#dddddd'
    }
});
