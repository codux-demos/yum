type AuthenticationListener = (isLoggedIn: boolean) => void;

export class Authentication {
    private isLoggedIn = false;
    listeners = new Set<AuthenticationListener>();

    subscribe(callback: AuthenticationListener) {
        this.listeners.add(callback);
    }

    unsubscribe(callback: AuthenticationListener) {
        this.listeners.delete(callback);
    }

    login() {
        this.isLoggedIn = true;
        this.listeners.forEach((listener) => listener(this.isLoggedIn));
    }

    logout() {
        this.isLoggedIn = false;
        this.listeners.forEach((listener) => listener(this.isLoggedIn));
    }

    getAuthStatus() {
        return this.isLoggedIn;
    }
}

export const authenticationService = new Authentication();
