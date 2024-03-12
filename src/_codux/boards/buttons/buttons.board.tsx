import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';
import styles from './buttons.board.module.scss';
import { LinkButton } from '../../../components/link-button/link-button';

export default createBoard({
    name: '🗂️ Buttons',
    Board: () => (
        <div className={styles.root}>
            <Button variant="primary" onClick={() => alert('Clicked')}>
                Primary
            </Button>
            <Button variant="primary" disabled onClick={() => alert('Clicked')}>
                Primary (disabled)
            </Button>
            <Button variant="secondary" onClick={() => alert('Clicked')}>
                Secondary
            </Button>
            <Button variant="secondary" disabled onClick={() => alert('Clicked')}>
                Secondary (disabled)
            </Button>
            <Button variant="unstyled" onClick={() => alert('Clicked')}>
                Unstyled
            </Button>
            <Button variant="unstyled" disabled onClick={() => alert('Clicked')}>
                Unstyled (disabled)
            </Button>
            <LinkButton onClick={() => alert('Clicked')}>Link button</LinkButton>
            <LinkButton disabled onClick={() => alert('Clicked')}>
                Link button (disabled)
            </LinkButton>
        </div>
    ),
    isSnippet: false,
});
