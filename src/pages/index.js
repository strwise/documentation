import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/overview">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

// component that return a section with a title and a description
function Section () {
    return (
        <div className="container">
            <h2 className="hero__subtitle" style={{marginTop: 7}}>StreamWise VPaaS Resell System</h2>
            <p>
                Welcome to <strong>Video Platform as a Service Resell System</strong>, a powerful and customizable platform that enables businesses and individuals to offer high-quality video streaming services to their customers.
            </p>
            <p>
                Our platform is designed to be intuitive and easy to use, with API-centric software that allows for flexibility and control over your services. With our platform, you can create and manage your own video streaming services, adjust settings, and add branding to make it look and feel like your own.
            </p>
            <p>
                Our platform also offers several key benefits, including:
            </p>
            <ul>
                <li><strong>Scalability</strong>: The platform is designed to scale with your business, allowing you to add and manage customers and services as needed.</li>
                <li><strong>Security</strong>: The platform is designed to be secure, with a focus on data protection and privacy.</li>
                <li><strong>Reliability</strong>: The platform is designed to be reliable, with a focus on uptime and performance.</li>
                <li><strong>Customization</strong>: The platform is designed to be customizable, allowing you to add your own branding and create your own services.</li>
            </ul>
            <p>
                Our platform is ideal for businesses and individuals who want to monetize their video content or provide video streaming services to their customers. This could include video production companies, event organizers, educational institutions, or businesses that offer online training or webinars.
            </p>
            <p>
                Whether you're just getting started with video streaming or looking for a more flexible and customizable platform for your existing services, the SaaS Video Streaming Resell Platform is the perfect solution. Contact us today to learn more about how our platform can help you grow your business and provide high-quality video streaming services to your customers.
            </p>
        </div>
    )
}



export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description={siteConfig.tagline}>
            <HomepageHeader />
            <main>
                <Section />
                {/*<HomepageFeatures />*/}
            </main>
        </Layout>
    );
}
