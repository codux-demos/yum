import { createBoard } from '@wixc3/react-board';
import { MoreThanDeliverySection } from '../../../components/more-than-delivery-section/more-than-delivery-section';

export default createBoard({
    name: '📦 MoreThanDeliverySection',
    Board: () => <MoreThanDeliverySection />,
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 0,
        },
        windowWidth: 1400,
        windowHeight: 900,
    },
});
