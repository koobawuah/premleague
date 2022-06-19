import { Layout } from '../components'

const About = () => {

    const d = new Date()

    return (
        <div>
        <Layout>
            <div className="w-full h-screen flex flex-col justify-center items-center text-white">
                <h2 className="font-black"> PremLeague &copy; {d.getFullYear()} </h2>
                <p className="max-w-3xl text-center text-lg"> We help you analyze your fixtures to understand and experience the game we love in a beautiful way! </p>
            </div>
        </Layout>
        </div>
    )
}

export default About;
