'use client'

import clientApolo from "@/app/client-apolo";
import {ApolloProvider} from "@apollo/client";

export default function ApolloLayout({ children }) {
    return(
        <ApolloProvider client={clientApolo}>
            {children}
        </ApolloProvider>
    )
}