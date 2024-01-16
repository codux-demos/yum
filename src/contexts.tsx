import { createContext } from 'react';
import { Authentication, authenticationService } from './services/authentication';

export interface AppContextValue {
    authentication: Authentication;
    isLoggedIn: boolean;
}

export const appContextDefaultValue: AppContextValue = {
    authentication: authenticationService,
    isLoggedIn: false,
};

export const AppContext = createContext<AppContextValue>(appContextDefaultValue);
