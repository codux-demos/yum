import { createBoard } from '@wixc3/react-board';
import { CitiesSection } from '../../../components/cities-section/cities-section';
import { Country } from '../../../types';
import { countries } from '../../../data/coutries';

export default createBoard({
    name: '📦 CitiesSection',
    Board: () => {
        const country = countries.find((country) => country.id === 'US') as Country;
        return <CitiesSection country={country} />;
    },
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
        },
        windowBackgroundColor: '#dddddd',
    },
});
