import Main from 'layouts/Main'
import { Providers } from 'context'
import { useLoadingPage } from 'hooks/useLoadingPage'
import { LoadingPage } from 'components/layout/LoadingPage'
import 'styles/tailwind.css'

export default function MyApp({ Component, pageProps, router }) {
  const { isRouteChanging, loadingKey } = useLoadingPage()

  const getLayout = Component.getLayout || ((page) => <Main>{page}</Main>)

  return (
    <>
      <LoadingPage isRouteChanging={isRouteChanging} key={loadingKey} />
      <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
    </>
  )
}
