import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'


export default function Home({ exploreData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-5xl mx-auto px-8'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 space-x-4'>
            {exploreData.map((item) => (
              <SmallCard 
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://links.papareact.com/pyp')
  const data = await res.json()

  return{
    props:{
      exploreData: data,
    }
  }
}
