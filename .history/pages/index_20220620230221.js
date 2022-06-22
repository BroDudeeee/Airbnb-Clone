import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'


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

      <main className='max-w-6xl'>
        <section>
          <h2>Explore Nearby</h2>
          {exploreData.map((item) => (
            <h1>{item.location}</h1>
          ))}
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
