import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'


export default function Home({ exploreData, cardsData }) {
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
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 pl-5'>
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
        <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>Live Anywhere</h2>
        
        <div className='flex space-x-4 overflow-scroll scrollbar-hide'>
          {cardsData.map((card) => (
            <MediumCard 
              key={card.img}
              img={card.img}
              title={card.title}
            />
          ))}
        </div>
        </section>

        <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const res1 = await fetch('https://links.papareact.com/pyp')
  const data1 = await res1.json()

  const res2 = await fetch('https://links.papareact.com/zp1')
  const data2 = await res2.json()

  return{
    props:{
      exploreData: data1,
      cardsData: data2,
    }
  }
}
