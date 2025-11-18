import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Lines from '@/components/common/Lines';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import ProgressScroll from '@/components/common/ProgressScroll';
import Header from '@/components/about-me/Header';
import Experience from '@/components/about-me/Experience';
import Script from 'next/script';

const experiences = [
  {
    company: 'Kejar.id',
    role: 'Web Developer - Internship',
    period: 'Jan 2021 - Mar 2021',
    summary:
      'Worked on learning content, LMS features, and educational information systems with measurable and monitored outcomes.',
    bullets: [],
  },
  {
    company: 'PT. Agatra Kreasi Teknologi',
    role: 'Backend Web Developer - Internship',
    period: 'Aug 2021 - Nov 2021',
    summary:
      'Part of an IT system integration and software development team in Bandung, building APIs and admin tooling.',
    bullets: [
      'Built RESTful API using Yii2 for PT Agatra Kreasi Teknologi\'s company profile platform.',
      'Built admin pages using Angular for PT Agatra Kreasi Teknologi\'s company profile.',
    ],
  },
  {
    company: 'PT. Teknologi Inovasi Mandiri',
    role: 'Web Developer - Bootcamp',
    period: 'Jul 2022 - Sep 2022',
    summary:
      'Joined a system integrator focused on enterprise solutions and IT consultancy, learning Spring Boot and internal tooling.',
    bullets: [
      'Learned and implemented Spring Boot for internal and external projects.',
    ],
    subRoles: [
      {
        role: 'Web Developer - Contract',
        period: 'Sep 2022 - Dec 2022',
        bullets: ['Worked on projects using Spring Boot, Spring MVC, Laravel, etc.'],
      },
      {
        role: 'Web Developer - Fulltime',
        period: 'Dec 2022 - Present',
        bullets: ['Working on projects using Spring Boot, Spring MVC, Laravel, etc.'],
      },
    ],
  },
];

export const metadata = {
  title: 'About Me - Lutfi°',
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
    ]),
  },
};

export default function AboutMePage() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header />
            <Experience />
          </main>
          <Footer />
        </div>
      </div>

      <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive" />
      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/TweenMax.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/charming.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/countdown.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/gsap.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/splitting.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/isotope.pkgd.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/imagesloaded.pkgd.min.js"></Script>
      <Script src="/assets/js/scripts.js"></Script>
    </body>
  );
}
