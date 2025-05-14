'use client'

import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

const httpLink = new HttpLink({
    uri: 'https://foods.dinodev.space/index.php?graphql',
});

/**
 * Middleware operation
 * If we have a session token in localStorage, add it to the GraphQL request as a Session header.
 */
export const middleware = new ApolloLink((operation, forward) => {
    /**
     * If session data exist in local storage, set value as session header.
     */
    const session = localStorage.getItem('woo-session');
    if (session) {
        operation.setContext(({ headers = {} }) => ({
            headers: {
                'woocommerce-session': `Session ${session}`,
            }
        }));
    }

    return forward(operation);
});

/**
 * Afterware operation
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 */
export const afterware = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
        /**
         * Check for session header and update session in local storage accordingly.
         */
        const context = operation.getContext();
        const { response: { headers } } = context;
        const session = headers.get('woocommerce-session');
        if (session) {
            if ( localStorage.getItem('woo-session') !== session ) {
                localStorage.setItem('woo-session', headers.get('woocommerce-session'));
            }
        }

        return response;
    });
});

const client = new ApolloClient({
    uri: httpLink,
    link: middleware.concat(afterware.concat(httpLink)),
    cache : new InMemoryCache,
    clientState: {},
});

export default client