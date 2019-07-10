import Head from 'next/head';
import css from '../style.css';

const Index = () => (
    <div className="home">
        <Head>
            <title>SBAuto - www.cargovans.ca - Thanks for 40 years!</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <script dangerouslySetInnerHTML={{__html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(51715271, "init", {
                    id:51715271,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
            });`}} />
        </Head>
        <noscript dangerouslySetInnerHTML={{__html: `<div><img src="https://mc.yandex.ru/watch/51715271" style="position:absolute; left:-9999px;" alt="" /></div>`}} />
        <h1 class="alternate">Thanks for 40 years!</h1>
        <nav>
            <a className="email" href="mailto:sales@sbauto.com">sales@sbauto.com</a>
        </nav>
    </div>
)

export default Index;