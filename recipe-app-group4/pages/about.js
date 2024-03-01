import Head from 'next/head'

import Image from 'next/image'

export default function About () {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <main>
                <section className="section_1">
                    <h1 className="head">About</h1>
                    <p className="para">This is your window into who we are and explore the essence of our identity and join us on our journey towards excellence.</p>
                </section>
                <section className="section_2">
                    <div className="container">
                        <h1 className="members">Leader</h1>
                        <Image src={'/images/Members/leader.jpg'} width='258' height='245' className="image" id='image' alt='Members'/>
                    </div>
                    <div className="container">
                        <h1 className="members">Member</h1>
                        <Image src={'/images/Members/vargas.jpg'} width='258' height='245' className="image" id='image' alt='Members'/>
                    </div>
                    <div className="container">
                        <h1 className="members">Member</h1>
                        <Image src={'/images/Members/lucido.png'} width='258' height='245' className="image" id='image' alt='Members'/>
                    </div>
                    <div className="container">
                        <h1 className="members">Member</h1>
                        <Image src={'/images/Members/cruz.jpg'} width='258' height='245' className="image" id='image' alt='Members'/>
                    </div>
                    <div className="container">
                        <h1 className="members">Member</h1>
                        <Image src={'/images/Members/medalla.jpg'} width='258' height='245' className="image" id='image' alt='Members'/>
                    </div>
                </section>
            </main>
        </>
    )
}