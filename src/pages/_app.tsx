import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme/index'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import StoreProvider from '@App/store/store'

export const client = new ApolloClient({
  uri: 'https://demo.saleor.io/graphql/',
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ApolloProvider client={client}>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default MyApp
