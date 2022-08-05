import Link from 'next/link'
import Head from 'next/head'
import { Layout } from '../components'

const About = () => {

    const d = new Date()

    return (
        <div>
        <Head>
            <title>Scoreboard - FixComp | Fixtures Analyzer </title>    
            <meta name="description" content="We help you analyze your fixtures to understand and experience the game we love in a beautiful way!" />
            <link rel="icon" href="/favicon.ico" />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3573939675911361"crossOrigin="anonymous"></script>
        </Head>
        <Layout>
            <div className="h-[700px] flex flex-col justify-center items-center text-white">
                <h2 className="font-black"> FixComp &copy; {d.getFullYear()} </h2>
                <p className="max-w-3xl text-center text-lg"> We help you analyze your fixtures to understand and experience the game we love in a beautiful way! </p>

                <Link href="https://21gzzpe79j5.typeform.com/to/A2bADUFD">
                    <a className="text-5xl text-white font-black my-40 hover:underline">Tell us what you think</a>
                </Link>
            </div>
        </Layout>
        </div>
    )
}

export default About;
