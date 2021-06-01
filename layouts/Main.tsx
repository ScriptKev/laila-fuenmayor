import { NavBar } from 'components/layout/NavBar'
import { Footer } from 'components/layout/Footer'

const Main = ({ children }) => {
  return (
    <div className='w-full h-full relative overflow-hidden bg-gray-100'>
      <NavBar />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </div>
  )
}
export const getLayout = (page) => <Main>{page}</Main>
export default Main
