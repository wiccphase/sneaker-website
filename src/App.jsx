import { CustomerReviews, Footer, Hero, PopularProduct, Services, SpecialOffers, Subscribe, SuperQuality} from './sections/index.js';
import NavBar from './components/NavBar';

const App = () => (
  <main className="relative ">
    <NavBar />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>

    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t">
      <Footer />
    </section>

  </main>
); 

export default App;

// export default function App() {
//   return ( 
//     <h1>qwejdfoisa</h1>
//   )
// }