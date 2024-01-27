import { createBoard } from '@wixc3/react-board';
import { SocialLoginButton } from '../../../components/social-login-button/social-login-button';

export default createBoard({
    name: '🔩 SocialLoginButton',
    Board: () => <SocialLoginButton variant="google" />,
    isSnippet: false,
    environmentProps: {
        windowBackgroundColor: '#dddddd',
    },
});
