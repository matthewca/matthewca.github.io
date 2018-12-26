import Head from 'next/head';
import css from '../style.css';

const Index = () => (
    <div className="home">
        <Head>
            <title>Matt Smith</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h1>Matt Smith</h1>
        <nav>
            <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/mattsmithabb">LinkedIn</a>
            <a className="twitter" target="_blank" href="https://www.twitter.com/mattsmithabb">Twitter</a>
            <a className="email" href="mailto:mattsmithabb@icloud.com">Email</a>
            <a className="archive secondary" target="_blank" href="https://web.archive.org/web/20181223013922/http://www.chaosm.net/blog/">Older stuff</a>
        </nav>
    </div>
)

export default Index;