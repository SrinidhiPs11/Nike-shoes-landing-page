import {Hero,
  Services,
  CustomerReviews,
  Footer,
  Subscribe,
  SuperQuality,
  PopularProducts,
  SpecialOffers} from './sections/index'
  import { Nav } from './components';
  import { ScrollToTop } from './components';

const App= ()=> {
  return (
    <>
  <main className="relative">
    <Nav/>
    <ScrollToTop/>
<section className="xl:padding-l wide:pading-r padding-b"><Hero/></section>
<section className="padding"><PopularProducts/></section>
<section className="p-10"><SuperQuality/></section>
<section className="padding-x py-10"><Services/></section>
<section className="padding"><SpecialOffers/></section>
<section className="bg-pale-blue padding "><CustomerReviews/></section>
<section className="padding-x sm:py-32 py-16 w-full"><Subscribe/></section>
<section className="bg-black padding-x padding-t pb-8 text-white"><Footer/></section>


  </main>
 </>
  )
}

export default App;