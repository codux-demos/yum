import { createBoard } from '@wixc3/react-board';
import { LandingPage } from '../../../components/landing-page/landing-page';

export default createBoard({
    name: 'LandingPage',
    Board: () => <LandingPage />,
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            top: 1,
            right: 0
        },
        windowHeight: 768,
        windowWidth: 1708
    }
});
