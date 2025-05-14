'use client'
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS_GQL = gql`
  query GET_PRODUCTS {
    products {
      edges {
        node {
          id
          databaseId
          name
          sku
          type
        }
      }
    }
  }
`;

export default function AppProducts() {

    const { loading, error, data } = useQuery(GET_PRODUCTS_GQL);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    console.log(data)

    return(
        <div>
            App product list
        </div>
    )
}