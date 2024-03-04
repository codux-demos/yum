import { createBoard } from '@wixc3/react-board';
import { AddressPicker } from '../../../components/address-picker/address-picker';

export default createBoard({
    name: '📦 AddressPicker',
    Board: () => <AddressPicker />,
    isSnippet: false,
    environmentProps: {
        windowBackgroundColor: '#eeeeee',
    },
});
