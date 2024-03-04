import { createBoard } from '@wixc3/react-board';
import { HeroSection } from '../../../components/hero-section/hero-section';

export default createBoard({
    name: '📦 HeroSection',
    Board: () => <HeroSection />,
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 0,
        },
        windowBackgroundColor: '#eeeeee',
        windowWidth: 1400,
        windowHeight: 900,
    },
});
