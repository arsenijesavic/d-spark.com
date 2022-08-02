import { Fragment, useCallback, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from 'framer-motion'

import dynamic from 'next/dynamic'

const TypeWriterEffect = dynamic(
  () => {
    return import('react-typewriter-effect')
  },
  { ssr: false }
)

const appearBottom = {
  hidden: {
    y: '200%',
    // color: '#0055FF',
    opacity: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.3 },
  },
  visible: {
    y: 0,
    // color: '#FF0088',
    opacity: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.3 },
  },
}

const appearLeft = {
  hidden: {
    x: '200%',
    // color: '#0055FF',
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.3 },
  },
  visible: {
    x: 0,
    // color: '#FF0088',
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.3 },
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Footer />
    </>
  )
}

const Header = () => {
  return (
    <header className=" z-50 flex items-center justify-center bg-white px-6 py-8">
      <div className="h-full w-full max-w-xs">
        <svg
          viewBox="0 0 209 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.3667 19.0553L33.2862 15.9747H26.584L23.5034 19.0553L26.584 22.1369H33.2862L36.3667 19.0553Z"
            fill="black"
          />
          <path
            d="M14.6255 19.0553L11.5439 15.9747H4.84277L1.76221 19.0553L4.84277 22.1369H11.5439L14.6255 19.0553Z"
            fill="black"
          />
          <path
            d="M19.0645 1.75293L15.9829 4.83452V11.5357L19.0645 14.6163L22.1461 11.5357V4.83452L19.0645 1.75293Z"
            fill="black"
          />
          <path
            d="M19.0645 23.4943L15.9829 26.5759V33.277L19.0645 36.3576L22.1461 33.277V26.5759L19.0645 23.4943Z"
            fill="black"
          />
          <path
            d="M11.1874 31.29H6.82992V26.9325L2.28174 31.4807V35.8382H6.63925L11.3781 31.0993L11.1874 31.29Z"
            fill="black"
          />
          <path
            d="M31.2994 26.9325V31.29H26.9419L26.7512 31.0993L31.4901 35.8382H35.8476V31.4807L31.2994 26.9325Z"
            fill="black"
          />
          <path
            d="M31.4901 2.27246L26.9419 6.82064H31.2994V11.1782L31.1087 11.3688L35.8476 6.62998V2.27246H31.4901Z"
            fill="black"
          />
          <path
            d="M6.82992 6.82064H11.1874L6.63925 2.27246H2.28174V6.62998L7.02059 11.3688L6.82992 11.1782V6.82064Z"
            fill="black"
          />
          <path
            d="M14.5168 22.1947H11.5692L6.83032 26.9325V31.29H11.1878L11.3785 31.0994L15.9267 26.5522V23.6036H14.5168V22.1947Z"
            fill="#01B464"
          />
          <path
            d="M23.6125 22.1947V23.6036H22.2026V26.5522L26.7508 31.0994L26.9415 31.29H31.299V26.9325L26.5602 22.1947H23.6125Z"
            fill="#01B464"
          />
          <path
            d="M23.6125 15.9169H26.5602L31.1083 11.3687L31.299 11.1781V6.82056H26.9415L26.758 7.00401L26.7508 7.01122L22.2026 11.5594V14.507H23.6125V15.9169Z"
            fill="#01B464"
          />
          <path
            d="M15.9267 14.507V11.5594L11.3785 7.01122L11.1878 6.82056H6.83032V11.1781L7.02099 11.3687L11.5692 15.9169H14.5168V14.507H15.9267Z"
            fill="#01B464"
          />
          <path
            d="M23.613 18.8648V15.9172V14.5073H22.2031H19.2555L19.0648 14.698L18.8741 14.5073H15.9265H14.5166V15.9172V18.8648L14.7073 19.0555L14.5166 19.2462V22.1948V23.6037H15.9265H18.8741L19.0648 23.413L19.2555 23.6037H22.2031H23.613V22.1948V19.2462L23.4223 19.0555L23.613 18.8648Z"
            fill="#0266FF"
          />
          <path
            d="M19.01 38.7425L14.2846 34.0171V30.4305L7.68852 37.0265H1.00899V30.3408L1.02342 30.3274L7.60298 23.7478H4.72545L0 19.0224L4.72545 14.2969H7.60195L0.94509 7.6308V0.948182H7.62771L7.64111 0.961581L14.2846 7.61328V4.72751L14.299 4.71308L19.01 0L23.7355 4.72545V7.61741L30.3934 1.22748H37.0749V7.91114L37.0605 7.92556L30.4222 14.3011H33.4038L38.1293 19.0265L33.4038 23.752H30.415L37.0677 30.4047V37.0873H30.3882L23.7355 30.4305V34.0171L23.7221 34.0315L19.01 38.7425ZM14.3794 33.9779L19.01 38.6085L23.6427 33.9779V30.2017L30.4294 36.9884H36.9781V30.4397L30.1893 23.653H33.3647L37.9953 19.0224L33.3647 14.3918H30.1862L36.9801 7.86682V1.31818H30.4315L23.6427 7.84002V4.76152L19.01 0.133982L14.3794 4.76152V7.84312L7.58855 1.04094H1.03991V7.58958L7.83075 14.3918H4.76462L0.133983 19.0224L4.76462 23.653H7.83075L1.10278 30.38V36.9286H7.65039L14.3784 30.2017L14.3794 33.9779Z"
            fill="#010101"
          />
          <path
            d="M49.5115 29.9625H64.7184V33.7542H45.7146V4.94702H64.7184V8.73975H49.5115V29.9625ZM64.7184 8.73975V29.9625H68.5112V8.73975H64.7184Z"
            fill="black"
          />
          <path
            d="M72.303 33.7543V29.9626H76.0957V33.7543H72.303Z"
            fill="black"
          />
          <path
            d="M79.8882 17.293V8.73872H83.6809V17.293H79.8882ZM79.8882 29.9625V26.1698H83.6809V29.9625H79.8882ZM83.6809 8.73975V4.94702H98.892V8.73975H83.6809ZM83.6809 21.0857V17.293H98.892V21.0857H83.6809ZM83.6809 33.7542V29.9625H98.892V33.7542H83.6809ZM98.892 12.5325V8.73975H102.725V12.5325H98.892ZM98.892 29.9625V21.0857H102.725V29.9625H98.892Z"
            fill="black"
          />
          <path
            d="M125.482 4.94702V8.73975H110.271V19.3553H125.482V23.148H110.271V33.7635H106.478V4.94702H125.482ZM125.482 8.73975H129.274V19.3553H125.482V8.73975Z"
            fill="black"
          />
          <path
            d="M152.03 12.5325H155.823V33.7542H152.03V25.0804H136.859V33.7542H133.066V12.5325H136.859V21.2929H152.03V12.5325ZM140.652 12.5325H136.859V8.73975H140.652V12.5325ZM140.652 8.73975V4.94702H148.237V8.73975H140.652ZM152.03 12.5325H148.237V8.73975H152.03V12.5325Z"
            fill="black"
          />
          <path
            d="M178.659 17.495V21.2877H182.452V33.7584H178.659V25.0804H174.866V21.2877H163.448V33.7584H159.615V4.94702H178.659V8.73975H163.448V17.5001L178.659 17.495ZM178.659 8.73975H182.452V17.5001H178.659V8.73975Z"
            fill="black"
          />
          <path
            d="M193.829 20.1169V23.9107H190.036V33.7553H186.244V4.94702H190.036V20.1169H193.829ZM193.829 20.1169V16.3242H197.622V20.1169H193.829ZM197.622 16.3242V12.5325H201.415V16.3242H197.622ZM197.622 23.9096V20.1169H201.415V23.9107L197.622 23.9096ZM201.415 12.5325V8.73975H205.207V12.5325H201.415ZM201.415 27.7024V23.9107H205.207V27.7034L201.415 27.7024ZM205.207 8.73872V4.94702H209V8.73975L205.207 8.73872ZM205.207 33.7532V27.7024H209V33.7542L205.207 33.7532Z"
            fill="black"
          />
        </svg>
      </div>
    </header>
  )
}

const Hero = () => {
  return (
    <header className="relative flex min-h-screen w-full items-center justify-center bg-emerald-500">
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-white">
        <h2 className="break-all text-center text-8xl font-bold">
          Ignite <br /> TRANSFORMATION
        </h2>

        <div className="mt-6">
          <PlayButtonLarge />
        </div>
      </div>

      {/* <div className="absolute inset-0 bg-red-50">
        <svg
          viewBox="0 0 1080 663"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 662.005L1215 662.005V0.770386L0 0.770386V662.005Z"
            fill="#010101"
          />
          <path
            d="M515 662.005L1143 662.005V630.71L515 630.71V662.005Z"
            fill="#AD619B"
          />
          <path
            d="M515 146.141L1143 146.141V0.770355L515 0.770355V146.141Z"
            fill="#AD619B"
          />
          <path
            d="M452 630.71L1143 630.71V64.37L452 64.37L452 630.71Z"
            fill="#01B464"
          />
          <path d="M1050 190.56H1081V159.265H1050V190.56Z" fill="black" />
          <path d="M1018 221.855H1050V190.56H1018V221.855Z" fill="black" />
          <path d="M987 221.855H1018V190.56H987V221.855Z" fill="black" />
          <path d="M857 95.665H888V64.37H857V95.665Z" fill="black" />
          <path d="M826 127.97H857V95.6652H826V127.97Z" fill="black" />
          <path d="M795 159.265H826V127.97H795V159.265Z" fill="black" />
          <path d="M764 190.56H795V159.265H764V190.56Z" fill="black" />
          <path d="M826 95.665H857V64.37H826V95.665Z" fill="#0266FF" />
          <path d="M795 127.97H826V95.6652H795V127.97Z" fill="#0266FF" />
          <path d="M764 159.265H795V127.97H764V159.265Z" fill="#0266FF" />
          <path d="M733 190.56H764V159.265H733V190.56Z" fill="#0266FF" />
          <path d="M577 567.11H608V535.815H577V567.11Z" fill="#0266FF" />
          <path d="M546 599.415H577V567.11H546V599.415Z" fill="#0266FF" />
          <path d="M515 630.71H546V599.415H515V630.71Z" fill="#0266FF" />
          <path d="M733 221.855H764V190.56H733V221.855Z" fill="black" />
          <path d="M733 253.15H764V221.855H733V253.15Z" fill="black" />
          <path d="M733 284.445H764V253.15H733V284.445Z" fill="black" />
          <path d="M701 284.445H733V253.15H701V284.445Z" fill="black" />
          <path d="M701 253.15H733V221.855H701V253.15Z" fill="#0266FF" />
          <path d="M701 315.74H733V284.445H701V315.74Z" fill="black" />
          <path d="M670 315.74H701V284.445H670V315.74Z" fill="black" />
          <path d="M670 347.035H701V315.74H670V347.035Z" fill="black" />
          <path d="M639 347.035H670V315.74H639V347.035Z" fill="black" />
          <path d="M639 315.74H670V284.445H639V315.74Z" fill="#0266FF" />
          <path d="M608 315.74H639V284.445H608V315.74Z" fill="#0266FF" />
          <path d="M608 284.445H639V253.15H608V284.445Z" fill="#0266FF" />
          <path d="M608 253.15H639V221.855H608V253.15Z" fill="black" />
          <path d="M577 253.15H608V221.855H577V253.15Z" fill="black" />
          <path d="M546 253.15H577V221.855H546V253.15Z" fill="black" />
          <path d="M483 221.855H515V190.56H483V221.855Z" fill="black" />
          <path d="M446 221.855H483V190.56H446V221.855Z" fill="black" />
          <path d="M446 410.635H483V379.34H446V410.635Z" fill="black" />
          <path d="M446 190.56H483V158.255H446V190.56Z" fill="black" />
          <path d="M446 158.255H483V126.96H446V158.255Z" fill="black" />
          <path d="M446 126.96H483V95.6651H446V126.96Z" fill="black" />
          <path d="M446 95.665H483V64.37H446V95.665Z" fill="black" />
          <path d="M483 95.665H515V64.37H483V95.665Z" fill="black" />
          <path d="M515 95.665H546V64.37H515V95.665Z" fill="black" />
          <path d="M639 95.665H670V64.37H639V95.665Z" fill="black" />
          <path d="M483 253.15H515V221.855H483V253.15Z" fill="black" />
          <path d="M546 284.445H577V253.15H546V284.445Z" fill="black" />
          <path d="M546 315.74H577V284.445H546V315.74Z" fill="black" />
          <path d="M546 347.035H577V315.74H546V347.035Z" fill="black" />
          <path d="M546 379.34H577V347.035H546V379.34Z" fill="black" />
          <path d="M608 441.93H639V410.635H608V441.93Z" fill="black" />
          <path d="M608 504.52H639V473.225H608V504.52Z" fill="black" />
          <path d="M608 535.815H639V504.52H608V535.815Z" fill="black" />
          <path d="M639 567.11H670V535.815H639V567.11Z" fill="black" />
          <path d="M670 567.11H701V535.815H670V567.11Z" fill="black" />
          <path d="M670 599.415H701V567.11H670V599.415Z" fill="black" />
          <path d="M670 630.71H701V599.415H670V630.71Z" fill="black" />
          <path d="M608 473.225H639V441.93H608V473.225Z" fill="black" />
          <path d="M446 504.52H483V473.225H446V504.52Z" fill="black" />
          <path d="M446 535.815H483V504.52H446V535.815Z" fill="black" />
          <path d="M446 473.225H483V441.93H446V473.225Z" fill="black" />
          <path d="M446 441.93H483V410.635H446V441.93Z" fill="black" />
          <path d="M483 441.93H515V410.635H483V441.93Z" fill="black" />
          <path d="M483 284.445H515V253.15H483V284.445Z" fill="black" />
          <path d="M483 315.74H515V284.445H483V315.74Z" fill="black" />
          <path d="M446 253.15H483V221.855H446V253.15Z" fill="black" />
          <path d="M446 284.445H483V253.15H446V284.445Z" fill="black" />
          <path d="M446 347.035H483V315.74H446V347.035Z" fill="black" />
          <path d="M446 315.74H483V284.445H446V315.74Z" fill="black" />
          <path d="M446 379.34H483V347.035H446V379.34Z" fill="black" />
          <path d="M515 284.445H546V253.15H515V284.445Z" fill="black" />
          <path d="M515 253.15H546V221.855H515V253.15Z" fill="black" />
          <path d="M483 473.225H515V441.93H483V473.225Z" fill="black" />
          <path d="M515 473.225H546V441.93H515V473.225Z" fill="black" />
          <path d="M483 535.815H515V504.52H483V535.815Z" fill="black" />
          <path d="M483 567.11H515V535.815H483V567.11Z" fill="black" />
          <path d="M483 504.52H515V473.225H483V504.52Z" fill="black" />
          <path d="M515 504.52H546V473.225H515V504.52Z" fill="black" />
          <path d="M446 599.415H483V567.11H446V599.415Z" fill="black" />
          <path d="M446 630.71H483V599.415H446V630.71Z" fill="black" />
          <path d="M446 567.11H483V535.815H446V567.11Z" fill="black" />
          <path d="M546 410.635H577V379.34H546V410.635Z" fill="black" />
          <path d="M515 410.635H546V379.34H515V410.635Z" fill="#0266FF" />
          <path d="M515 127.97H546V95.6652H515V127.97Z" fill="#0266FF" />
          <path d="M670 410.635H701V379.34H670V410.635Z" fill="black" />
          <path d="M577 410.635H608V379.34H577V410.635Z" fill="black" />
          <path d="M670 253.15H701V221.855H670V253.15Z" fill="black" />
          <path d="M670 284.445H701V253.15H670V284.445Z" fill="black" />
          <path d="M670 190.56H701V158.255H670V190.56Z" fill="black" />
          <path d="M670 221.855H701V190.56H670V221.855Z" fill="black" />
          <path d="M670 126.96H701V95.6651H670V126.96Z" fill="black" />
          <path d="M670 158.255H701V126.96H670V158.255Z" fill="black" />
          <path d="M670 95.665H701V64.37H670V95.665Z" fill="black" />
          <path d="M987 253.15H1018V221.855H987V253.15Z" fill="black" />
          <path d="M956 253.15H987V221.855H956V253.15Z" fill="black" />
          <path d="M958 284.445H990V253.15H958V284.445Z" fill="black" />
          <path d="M927 284.445H958V253.15H927V284.445Z" fill="black" />
          <path d="M930 315.74H961V284.445H930V315.74Z" fill="black" />
          <path d="M898 315.74H930V284.445H898V315.74Z" fill="black" />
          <path d="M867 315.74H898V284.445H867V315.74Z" fill="black" />
          <path d="M836 315.74H867V284.445H836V315.74Z" fill="black" />
          <path d="M898 347.035H930V315.74H898V347.035Z" fill="black" />
          <path d="M867 347.035H898V315.74H867V347.035Z" fill="black" />
          <path d="M958 535.815H990V504.52H958V535.815Z" fill="black" />
          <path d="M927 535.815H958V504.52H927V535.815Z" fill="black" />
          <path d="M896 535.815H927V504.52H896V535.815Z" fill="black" />
          <path d="M958 567.11H990V535.815H958V567.11Z" fill="black" />
          <path d="M958 599.415H990V567.11H958V599.415Z" fill="black" />
          <path d="M958 630.71H990V599.415H958V630.71Z" fill="black" />
          <path d="M927 567.11H958V535.815H927V567.11Z" fill="black" />
          <path d="M836 347.035H867V315.74H836V347.035Z" fill="black" />
          <path d="M867 379.34H898V347.035H867V379.34Z" fill="#0266FF" />
          <path d="M836 379.34H867V347.035H836V379.34Z" fill="black" />
          <path d="M805 347.035H836V315.74H805V347.035Z" fill="black" />
          <path d="M805 379.34H836V347.035H805V379.34Z" fill="black" />
          <path d="M774 347.035H805V315.74H774V347.035Z" fill="black" />
          <path d="M774 379.34H805V347.035H774V379.34Z" fill="black" />
          <path d="M774 410.635H805V379.34H774V410.635Z" fill="black" />
          <path d="M743 410.635H774V379.34H743V410.635Z" fill="black" />
          <path d="M836 410.635H867V379.34H836V410.635Z" fill="black" />
          <path d="M805 410.635H836V379.34H805V410.635Z" fill="black" />
          <path d="M836 441.93V410.635H805V441.93H836Z" fill="black" />
          <path d="M836 473.225V441.93H805V473.225H836Z" fill="black" />
          <path d="M836 504.52V473.225H805V504.52H836Z" fill="black" />
          <path d="M867 504.52V473.225H836V504.52H867Z" fill="black" />
          <path d="M867 441.93V410.635H836V441.93H867Z" fill="black" />
          <path d="M867 473.225V441.93H836V473.225H867Z" fill="black" />
          <path d="M1050 159.265H1081V127.97H1050V159.265Z" fill="black" />
          <path d="M1050 127.97H1081V95.6652H1050V127.97Z" fill="black" />
          <path d="M1050 95.665H1081V64.37H1050V95.665Z" fill="black" />
          <path d="M1050 284.445H1081V253.15H1050V284.445Z" fill="#0266FF" />
          <path d="M1021 315.74H1052V284.445H1021V315.74Z" fill="#0266FF" />
          <path d="M805 535.815H836V504.52H805V535.815Z" fill="#0266FF" />
          <path d="M896 599.415H927V567.11H896V599.415Z" fill="#0266FF" />
          <path d="M896 630.71H927V599.415H896V630.71Z" fill="#0266FF" />
          <path d="M990 347.035H1021V315.74H990V347.035Z" fill="black" />
          <path d="M958 379.34H990V347.035H958V379.34Z" fill="black" />
          <path d="M927 410.635H958V379.34H927V410.635Z" fill="black" />
          <path d="M958 410.635H990V379.34H958V410.635Z" fill="black" />
          <path d="M990 410.635H1021V379.34H990V410.635Z" fill="black" />
          <path d="M990 379.34H1021V347.035H990V379.34Z" fill="black" />
          <path d="M990 504.52H1021V473.225H990V504.52Z" fill="black" />
          <path d="M421 599.415H452V567.11H421V599.415Z" fill="#01B464" />
          <path
            d="M122 32.0654L153 32.0654V0.770355L122 0.770355V32.0654Z"
            fill="#0266FF"
          />
          <path
            d="M150 63.3605L181 63.3605V32.0654H150V63.3605Z"
            fill="#0266FF"
          />
          <path
            d="M244.502 243.055C246.496 243.055 246.502 240.026 244.502 240.026C242.502 240.026 242.496 243.055 244.502 243.055Z"
            fill="black"
          />
        </svg>
      </div> */}
    </header>
  )
}

const About = () => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

  const animation = {
    initial: { ...variants.closed },
    whileInView: { ...variants.open },
    viewport: { once: true },
  }

  return (
    <>
      <div>
        {/* DO YOU */}
        <Section className="sm:flex">
          <BoxHeader className="w-full sm:w-6/12" title="Do you?" />

          <div className="flex w-full flex-col items-center justify-center py-10 sm:w-6/12">
            <TextSlider
              className="max-w-sm  text-center font-mono text-3xl uppercase leading-none sm:text-5xl"
              text={[
                `Overthink and \n easily disperse`,
                'Would like to connect with new crew',
              ]}
            />

            <div className="mt-6">
              <PlayButton />
            </div>
          </div>

          <PixelGrid>
            {/* <ul className="m-0 flex list-none flex-wrap p-0 text-center">
              <motion.li
                {...animation}
                className="m-0 flex h-40 w-full items-center justify-center border-t border-gray-300 sm:border-r md:h-52 md:w-6/12"
              >
                <TextSlider
                  className="max-w-sm px-12 text-center font-mono text-3xl uppercase leading-none sm:px-6 sm:text-4xl"
                  text={[
                    `Overthink and \n easily disperse`,
                    'Would like to connect with new crew',
                  ]}
                />
              </motion.li>

              <motion.li
                {...animation}
                className="m-0 flex h-40 w-full items-center justify-center border-t border-gray-300 md:h-52 md:w-6/12"
              >
                <TextSlider
                  className="max-w-sm px-12 text-center font-mono text-3xl uppercase leading-none sm:px-6 sm:text-4xl"
                  text={[
                    'Get bored\n quickly',
                    'Are exploring their authenticity',
                  ]}
                />
              </motion.li>

              <motion.li
                {...animation}
                className="m-0 flex h-40 w-full items-center justify-center border-t border-gray-300 sm:border-r md:h-52 md:w-6/12"
              >
                <TextSlider
                  className="max-w-sm px-12 text-center font-mono text-3xl uppercase leading-none sm:px-6 sm:text-4xl"
                  text={[
                    'Expect to\n be inspired',
                    'Could use fresh perspectives',
                  ]}
                />
              </motion.li>

              <motion.li
                {...animation}
                className="m-0 flex h-40 w-full items-center justify-center border-t border-gray-300 md:h-52 md:w-6/12"
              >
                <TextSlider
                  className="max-w-sm px-12 text-center font-mono text-3xl uppercase leading-none sm:px-6 sm:text-4xl"
                  text={[
                    'Are searching\n for new purpose',
                    'Are ready for the new challenges',
                  ]}
                />
              </motion.li>

              <li className="m-0 flex h-28 w-full items-center justify-center border-t border-gray-300 md:h-52">
                <PlayButton />
              </li>
            </ul> */}
          </PixelGrid>
        </Section>

        {/* WHAT IF */}
        <Section className="sm:flex">
          <BoxHeader className="w-full sm:w-6/12" title="What if?" />

          <div className="flex w-full flex-col items-center justify-center py-10 sm:w-6/12">
            <TextSlider
              className="max-w-sm  text-center font-mono text-3xl uppercase leading-none sm:text-5xl"
              text={[
                `Overthink and \n easily disperse`,
                'Would like to connect with new crew',
              ]}
            />

            <div className="mt-6">
              <PlayButton />
            </div>
          </div>

          <PixelGrid>
            {/* <ul className="m-0 flex list-none flex-col items-center justify-center p-0 text-center">
              <motion.li
                {...animation}
                className="m-0 flex h-40 w-full items-center justify-center overflow-hidden border-t border-gray-300 py-10 last:border-b md:h-52"
              >
                <TextSlider
                  className="max-w-sm px-8 text-center font-mono text-3xl uppercase leading-none sm:max-w-xl sm:px-6 sm:text-4xl"
                  text={[
                    'You felt good about yourself?',
                    'You had courage to change your career?',
                    'You felt good about yourself?',
                    'You had courage to change your career?',
                    'You felt good about yourself?',
                    'You had courage to change your career?',
                  ]}
                />
              </motion.li>

              <motion.li
                {...animation}
                className="m-0 flex h-40 w-full items-center justify-center overflow-hidden border-t border-gray-300 py-10 last:border-b md:h-52"
              >
                <TextSlider
                  className="max-w-sm px-8 text-center font-mono text-3xl uppercase leading-none sm:max-w-xl sm:px-6 sm:text-4xl"
                  text={[
                    'You if you felt confident about your work?',
                    'You were not afraid to share what you really think?',
                    'You if you felt confident about your work?',
                    'You were not afraid to share what you really think?',
                    'You if you felt confident about your work?',
                    'You were not afraid to share what you really think?',
                  ]}
                />
              </motion.li>

              <motion.li
                {...animation}
                className="m-0 flex h-40 w-full items-center justify-center overflow-hidden border-t border-gray-300 py-10 last:border-b md:h-52"
              >
                <TextSlider
                  className="max-w-sm px-8 text-center font-mono text-3xl uppercase leading-none sm:max-w-xl sm:px-6 sm:text-4xl"
                  text={[
                    'You if you embraced your flaws?',
                    'You didn’t hold back your creativity?',
                    'You if you embraced your flaws?',
                    'You didn’t hold back your creativity?',
                    'You if you embraced your flaws?',
                    'You didn’t hold back your creativity?',
                  ]}
                />
              </motion.li>

              <motion.li
                {...animation}
                className="bg-red m-0 flex h-40 w-full items-center justify-center border-t border-gray-300 py-10 last:border-b"
              >
                <PlayButton />
              </motion.li>
            </ul> */}
          </PixelGrid>
        </Section>

        {/* ARE YOU READY TO */}
        <Section>
          <BoxHeader title={`Are you <br class="sm:hidden" /> ready to`} />

          <PixelGrid>
            <ul className="m-0 flex list-none flex-wrap p-0 text-center">
              {[
                {
                  keyword: 'REVEAL',
                  title: 'authenticity',
                  subtitle:
                    '& acknowledge the foundation that defines your originality.',
                },
                {
                  keyword: 'DEFINE',
                  title: 'core values',
                  subtitle: '& find out what is truly important to you.',
                },
                {
                  keyword: 'TRACE',
                  title: 'social grid',
                  subtitle:
                    '& discover the network that could support your growth.',
                },
                {
                  keyword: 'DESIGN',
                  title: 'growth path',
                  subtitle:
                    '& create a personal shift that gives you a sense of meaning.',
                },
                {
                  keyword: 'DISCOVER',
                  title: 'capacity',
                  subtitle: '& learn, create, collaborate and evolve.',
                },
                {
                  keyword: 'EMBRACE',
                  title: 'new crew',
                  subtitle:
                    '& meet fresh people through a playful experience. ',
                },
              ].map((item, index) => (
                <motion.li
                  {...animation}
                  className="m-0 flex h-48 flex-col items-center justify-center border-t border-gray-600 px-6 md:w-6/12 md:border"
                  key={index}
                >
                  <h4 className=" max-w-xs px-4 text-center text-4xl uppercase leading-none">
                    {item.keyword} <br className="sm:hidden" /> {item.title}
                  </h4>

                  <p className="mt-2 max-w-xs px-4 text-center text-xl leading-none">
                    {item.subtitle}
                  </p>
                </motion.li>
              ))}
              <motion.li
                {...animation}
                className="m-0 flex h-28 w-full items-center justify-center border-t border-gray-300 md:h-52"
              >
                <PlayButton />
              </motion.li>
            </ul>
          </PixelGrid>
        </Section>

        {/* BECAUSE */}
        <Section>
          <BoxHeader title="Because" />

          <div className="flex h-52 items-center justify-center overflow-hidden bg-black py-8 text-white md:py-16">
            <motion.h4 {...animation}>
              <TextSlider
                className="max-w-lg px-4 text-center font-mono text-4xl uppercase leading-none"
                text={[
                  'We want to adapt better to this ever-changing world.',
                  'We need to improve our ability to connect and collaborate.',
                  'We wish to create a relevant imprint.',
                  'We want to adapt better to this ever-changing world.',
                  'We need to improve our ability to connect and collaborate.',
                  'We wish to create a relevant imprint.',
                ]}
              />
            </motion.h4>
          </div>
        </Section>

        {/* HOW */}
        <Section>
          <BoxHeader title="How?" />

          <div className="wrap items-stretch">
            <div
              id="a"
              className="flex items-center justify-center bg-green py-8"
            >
              <motion.h4
                {...animation}
                className="px-4 text-center text-4xl uppercase leading-none"
              >
                5 week program
              </motion.h4>
            </div>

            <div
              id="c"
              className="border-t border-b border-gray-300 bg-gold py-8 text-center"
            >
              <motion.h4
                {...animation}
                className="px-4 text-4xl uppercase leading-none"
              >
                10 online <br /> sessions
              </motion.h4>

              <motion.ul {...animation} className="mt-6">
                {[
                  'self discovery games',
                  'hands on activities',
                  'group support',
                  'playful tasks',
                ].map((item, index) => (
                  <li key={index} className=" m-0 uppercase ">
                    <div className="px-8">
                      <p className="mt-2 px-4 text-2xl leading-none">{item}</p>
                    </div>
                  </li>
                ))}
              </motion.ul>
            </div>

            <div
              id="b"
              className="flex items-center justify-center bg-blue py-8"
            >
              <motion.h4
                {...animation}
                className="px-4 text-center text-4xl uppercase leading-none"
              >
                +1 REAL MEETUP
              </motion.h4>
            </div>
          </div>
        </Section>
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .wrap {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          #a {
            grid-column: 1 / 2;
            grid-row: 1;
          }
          #b {
            grid-column: 1 / 2;
            grid-row: 2;
          }
          #c {
            grid-column: 2;
            grid-row: 1 / 3;
          }
        }
      `}</style>
    </>
  )
}

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center justify-center bg-black py-12 text-center text-white md:px-96">
        <h3 className=" break-words text-center text-4xl uppercase md:px-10">
          Activate personal growth through a gamified experience
        </h3>

        <div className="mt-6">
          <PlayButtonLarge />
        </div>

        <p className=" mt-6 text-sm uppercase">
          Created by <br />
          Nova Iskra and DACIDA
        </p>
      </footer>
      <style jsx>{`
        footer > h3 {
          word-spacing: 100vw;
        }
        @media (min-width: 768px) {
          footer > h3 {
            word-spacing: normal;
          }
        }
      `}</style>
    </>
  )
}

const TextSlider = ({ className, text }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index++)
    }, 2000)

    return () => clearInterval(intervalId)
  }, [index, setIndex])

  const variants = {
    enter: { opacity: 0, y: -100 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  }

  const currentIndex = index % text.length

  return (
    <span className="block">
      <motion.div
        key={index}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        className={`${className} inline-block`}
      >
        {text[currentIndex]}
      </motion.div>
    </span>
  )
}

const BoxHeader = ({ title, className }) => {
  return (
    <header
      className={`bg-black py-4 text-center text-white md:py-48 ${className}`}
    >
      <span className="inline-block">
        <motion.h2
          initial={{ ...appearBottom.hidden }}
          whileInView={{ ...appearBottom.visible }}
          viewport={{ once: true }}
          className="inline-block py-4 text-6xl uppercase leading-none md:text-9xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </span>
    </header>
  )
}

const Section = ({ children, ...rest }) => {
  const container = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  }

  const animation = {
    initial: { ...container.closed },
    whileInView: { ...container.open },
    viewport: { once: true },
  }

  return <motion.section {...(animation, rest)}>{children}</motion.section>
}

const PlayButton = () => {
  return (
    <button className="">
      <svg
        width="130"
        height="70"
        viewBox="0 0 130 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.52441 8.58473V10.7311V12.8775V15.023V17.1694V19.3158V21.4622V23.6086V25.7541V27.9005V30.0469V32.1933V34.3389V36.4853V38.6317V40.7781V42.9236V45.07V47.2164V49.3628V51.5083H10.6558V53.6547H12.7871H14.9176H17.0489H19.1803H21.3116H23.443H25.5734H27.7048H29.8361H31.9675H34.098H36.2293H38.3607H40.492H42.6225H44.7538H46.8852H49.0165H51.1479H53.2783H55.4097H57.5411H59.6724H61.8038H63.9342H66.0656H68.1969H70.3283H72.4587H74.5901H76.7214H78.8528H80.9832H83.1146H85.246H87.3773H89.5087H91.6391H93.7705H95.9018H98.0332H100.164H102.295H104.426H106.558H108.689H110.819H112.951H115.082H117.213H119.344V51.5083H121.475V49.3628V47.2164V45.07V42.9236V40.7781V38.6317V36.4853V34.3389V32.1933V30.0469V27.9005V25.7541V23.6086V21.4622V19.3158V17.1694V15.023V12.8775V10.7311V8.58473V6.43833V4.29282H119.344V2.14642H117.213H115.082H112.951H110.819H108.689H106.558H104.426H102.295H100.164H98.0332H95.9018H93.7705H91.6391H89.5087H87.3773H85.246H83.1146H80.9832H78.8528H76.7214H74.5901H72.4587H70.3283H68.1969H66.0656H63.9342H61.8038H59.6724H57.5411H55.4097H53.2783H51.1479H49.0165H46.8852H44.7538H42.6225H40.492H38.3607H36.2293H34.098H31.9675H29.8361H27.7048H25.5734H23.443H21.3116H19.1803H17.0489H14.9176H12.7871H10.6558V4.29282H8.52441V6.43833V8.58473Z"
          fill="#00B75B"
        />
        <path
          d="M2.13135 24.9301V27.0765V29.2229V31.3684V33.5148V35.6612V37.8076V39.9531V42.0995V44.2459V46.3923V48.5387V50.6842V52.8306V54.977V57.1234H4.2627V59.2689H6.39316V61.4153H8.52451H10.6559H12.7872H14.9177H17.049H19.1804H21.3117H23.4431H25.5736H27.7049H29.8363H31.9676H34.0981H36.2294H38.3608H40.4921H42.6226H44.7539H46.8853H49.0167H51.148H53.2785H55.4098H57.5412H59.6725H61.8039H63.9343H66.0657H68.197H70.3284H72.4589H74.5902H76.7216H78.8529H80.9834H83.1147H85.2461H87.3774H89.5088H91.6393H93.7706H95.902H98.0333H100.164H102.295H104.426H106.558H108.689H110.82H112.951H115.082H117.213H119.344H121.476H123.607V59.2689H125.738V57.1234H127.869V54.977V52.8306V50.6842V48.5387V46.3923V44.2459V42.0995V39.9531V37.8076V35.6612V33.5148V31.3684V29.2229V27.0765V24.9301V22.7837V20.6382H125.738V18.4918H123.607V19.3158V21.4623V23.6087V25.7542V27.9006V30.047V32.1934V34.3389V36.4853V38.6317V40.7781V42.9236V45.07V47.2164V49.3628V51.5083H121.476V53.6547H119.344V55.8011H117.213H115.082H112.951H110.82H108.689H106.558H104.426H102.295H100.164H98.0333H95.902H93.7706H91.6393H89.5088H87.3774H85.2461H83.1147H80.9834H78.8529H76.7216H74.5902H72.4589H70.3284H68.197H66.0657H63.9343H61.8039H59.6725H57.5412H55.4098H53.2785H51.148H49.0167H46.8853H44.7539H42.6226H40.4921H38.3608H36.2294H34.0981H31.9676H29.8363H27.7049H25.5736H23.4431H21.3117H19.1804H17.049H14.9177H12.7872H10.6559V53.6547H8.52451V51.5083H6.39316V49.3628V47.2164V45.07V42.9236V40.7781V38.6317V36.4853V34.3389V32.1934V30.047V27.9006V25.7542V23.6087V21.4623V19.3158V18.4918H4.2627V20.6382H2.13135V22.7837V24.9301Z"
          fill="#0061FF"
        />
        <path
          d="M127.869 59.2689H125.738V61.4153H123.607V63.5617H121.476H119.344H117.213H115.082H112.951H110.82H108.689H106.558H104.426H102.295H100.164H98.0333H95.902H93.7706H91.6393H89.5088H87.3774H85.2461H83.1147H80.9834H78.8529H76.7216H74.5902H72.4589H70.3284H68.197H66.0657H63.9343H61.8039H59.6725H57.5412H55.4098H53.2785H51.148H49.0167H46.8853H44.7539H42.6226H40.4921H38.3608H36.2294H34.0981H31.9676H29.8363H27.7049H25.5736H23.4431H21.3117H19.1804H17.049H14.9177H12.7872H10.6559H8.52451H6.39316V61.4153H4.2627V59.2689H2.13135V61.4153V63.5617H4.2627V65.7081H6.39316V67.8545H8.52451H10.6559H12.7872H14.9177H17.049H19.1804H21.3117H23.4431H25.5736H27.7049H29.8363H31.9676H34.0981H36.2294H38.3608H40.4921H42.6226H44.7539H46.8853H49.0167H51.148H53.2785H55.4098H57.5412H59.6725H61.8039H63.9343H66.0657H68.197H70.3284H72.4589H74.5902H76.7216H78.8529H80.9834H83.1147H85.2461H87.3774H89.5088H91.6393H93.7706H95.902H98.0333H100.164H102.295H104.426H106.558H108.689H110.82H112.951H115.082H117.213H119.344H121.476H123.607V65.7081H125.738V63.5617H127.869V61.4153V59.2689Z"
          fill="#0061FF"
        />
        <path
          d="M123.607 18.4917H125.738V16.3453H123.607V17.1694V18.4917Z"
          fill="black"
        />
        <path
          d="M6.39315 17.1694V16.3453H4.2627V18.4917H6.39315V17.1694Z"
          fill="black"
        />
        <path
          d="M127.87 18.4918H125.738V20.6382H127.87V18.4918Z"
          fill="black"
        />
        <path
          d="M127.869 22.7836V24.93V27.0764V29.2228V31.3683V33.5147V35.6611V37.8075V39.953V42.0994V44.2458V46.3922V48.5386V50.6841V52.8306V54.977V57.1234H125.738V59.2689H127.869V61.4153V63.5617H130V61.4153V59.2689V57.1234V54.977V52.8306V50.6841V48.5386V46.3922V44.2458V42.0994V39.953V37.8075V35.6611V33.5147V31.3683V29.2228V27.0764V24.93V22.7836V20.6381H127.869V22.7836Z"
          fill="black"
        />
        <path
          d="M4.2627 18.4918H2.13135V20.6382H4.2627V18.4918Z"
          fill="black"
        />
        <path
          d="M6.39405 59.2689H4.2627V61.4153H6.39405V59.2689Z"
          fill="black"
        />
        <path
          d="M119.344 61.4153H117.213H115.082H112.951H110.819H108.689H106.558H104.426H102.295H100.164H98.0332H95.9018H93.7704H91.6391H89.5086H87.3773H85.2459H83.1146H80.9832H78.8528H76.7214H74.5901H72.4587H70.3283H68.1969H66.0656H63.9342H61.8037H59.6724H57.541H55.4097H53.2783H51.1479H49.0165H46.8852H44.7538H42.6225H40.492H38.3607H36.2293H34.098H31.9675H29.8361H27.7048H25.5734H23.443H21.3116H19.1803H17.0489H14.9176H12.7871H10.6558H8.52442H6.39307V63.5617H8.52442H10.6558H12.7871H14.9176H17.0489H19.1803H21.3116H23.443H25.5734H27.7048H29.8361H31.9675H34.098H36.2293H38.3607H40.492H42.6225H44.7538H46.8852H49.0165H51.1479H53.2783H55.4097H57.541H59.6724H61.8037H63.9342H66.0656H68.1969H70.3283H72.4587H74.5901H76.7214H78.8528H80.9832H83.1146H85.2459H87.3773H89.5086H91.6391H93.7704H95.9018H98.0332H100.164H102.295H104.426H106.558H108.689H110.819H112.951H115.082H117.213H119.344H121.475H123.607V61.4153H121.475H119.344Z"
          fill="black"
        />
        <path
          d="M125.738 59.2689H123.607V61.4153H125.738V59.2689Z"
          fill="black"
        />
        <path
          d="M127.87 63.5617H125.738V65.7081H127.87V63.5617Z"
          fill="black"
        />
        <path
          d="M125.738 65.7081H123.607V67.8545H125.738V65.7081Z"
          fill="black"
        />
        <path
          d="M119.344 67.8545H117.213H115.082H112.951H110.819H108.689H106.558H104.426H102.295H100.164H98.0332H95.9018H93.7704H91.6391H89.5086H87.3773H85.2459H83.1146H80.9832H78.8528H76.7214H74.5901H72.4587H70.3283H68.1969H66.0656H63.9342H61.8037H59.6724H57.541H55.4097H53.2783H51.1479H49.0165H46.8852H44.7538H42.6225H40.492H38.3607H36.2293H34.098H31.9675H29.8361H27.7048H25.5734H23.443H21.3116H19.1803H17.0489H14.9176H12.7871H10.6558H8.52442H6.39307V70H8.52442H10.6558H12.7871H14.9176H17.0489H19.1803H21.3116H23.443H25.5734H27.7048H29.8361H31.9675H34.098H36.2293H38.3607H40.492H42.6225H44.7538H46.8852H49.0165H51.1479H53.2783H55.4097H57.541H59.6724H61.8037H63.9342H66.0656H68.1969H70.3283H72.4587H74.5901H76.7214H78.8528H80.9832H83.1146H85.2459H87.3773H89.5086H91.6391H93.7704H95.9018H98.0332H100.164H102.295H104.426H106.558H108.689H110.819H112.951H115.082H117.213H119.344H121.475H123.607V67.8545H121.475H119.344Z"
          fill="black"
        />
        <path
          d="M2.13135 59.2689H4.26271V57.1234H2.13135V54.977V52.8306V50.6841V48.5386V46.3922V44.2458V42.0994V39.953V37.8075V35.6611V33.5147V31.3683V29.2228V27.0764V24.93V22.7836V20.6381H0V22.7836V24.93V27.0764V29.2228V31.3683V33.5147V35.6611V37.8075V39.953V42.0994V44.2458V46.3922V48.5386V50.6841V52.8306V54.977V57.1234V59.2689V61.4153V63.5617H2.13135V61.4153V59.2689Z"
          fill="black"
        />
        <path
          d="M4.2627 63.5617H2.13135V65.7081H4.2627V63.5617Z"
          fill="black"
        />
        <path
          d="M6.39405 65.7081H4.2627V67.8545H6.39405V65.7081Z"
          fill="black"
        />
        <path
          d="M10.6558 2.14642H8.52441V4.29283H10.6558V2.14642Z"
          fill="black"
        />
        <path
          d="M6.39307 18.4917V19.3158V21.4622V23.6086V25.7541V27.9005V30.0469V32.1933V34.3388V36.4852V38.6316V40.778V42.9235V45.0699V47.2163V49.3627V51.5082H8.52442V49.3627V47.2163V45.0699V42.9235V40.778V38.6316V36.4852V34.3388V32.1933V30.0469V27.9005V25.7541V23.6086V21.4622V19.3158V17.1694V15.023V12.8775V10.7311V8.58469V6.43829V4.29279H6.39307V6.43829V8.58469V10.7311V12.8775V15.023V16.3453V17.1694V18.4917Z"
          fill="black"
        />
        <path
          d="M10.6558 51.5092H8.52441V53.6556H10.6558V51.5092Z"
          fill="black"
        />
        <path
          d="M14.9176 2.1464H17.0489H19.1803H21.3116H23.443H25.5734H27.7048H29.8362H31.9675H34.098H36.2293H38.3607H40.492H42.6225H44.7538H46.8852H49.0165H51.1479H53.2784H55.4097H57.5411H59.6724H61.8038H63.9342H66.0656H68.1969H70.3283H72.4588H74.5901H76.7215H78.8528H80.9833H83.1146H85.246H87.3773H89.5087H91.6392H93.7705H95.9019H98.0332H100.164H102.295H104.426H106.558H108.689H110.82H112.951H115.082H117.213H119.344V0H117.213H115.082H112.951H110.82H108.689H106.558H104.426H102.295H100.164H98.0332H95.9019H93.7705H91.6392H89.5087H87.3773H85.246H83.1146H80.9833H78.8528H76.7215H74.5901H72.4588H70.3283H68.1969H66.0656H63.9342H61.8038H59.6724H57.5411H55.4097H53.2784H51.1479H49.0165H46.8852H44.7538H42.6225H40.492H38.3607H36.2293H34.098H31.9675H29.8362H27.7048H25.5734H23.443H21.3116H19.1803H17.0489H14.9176H12.7871H10.6558V2.1464H12.7871H14.9176Z"
          fill="black"
        />
        <path
          d="M121.476 2.14642H119.344V4.29283H121.476V2.14642Z"
          fill="black"
        />
        <path
          d="M121.476 8.58469V10.7311V12.8775V15.023V17.1694V19.3158V21.4622V23.6086V25.7541V27.9005V30.0469V32.1933V34.3388V36.4852V38.6316V40.778V42.9235V45.0699V47.2163V49.3627V51.5082H123.607V49.3627V47.2163V45.0699V42.9235V40.778V38.6316V36.4852V34.3388V32.1933V30.0469V27.9005V25.7541V23.6086V21.4622V19.3158V18.4917V17.1694V16.3453V15.023V12.8775V10.7311V8.58469V6.43829V4.29279H121.476V6.43829V8.58469Z"
          fill="black"
        />
        <path
          d="M121.476 51.5092H119.344V53.6556H121.476V51.5092Z"
          fill="black"
        />
        <path
          d="M115.082 53.6547H112.951H110.82H108.689H106.558H104.426H102.295H100.164H98.0332H95.9019H93.7705H91.6392H89.5087H87.3773H85.246H83.1146H80.9833H78.8528H76.7215H74.5901H72.4588H70.3283H68.1969H66.0656H63.9342H61.8038H59.6724H57.5411H55.4097H53.2784H51.1479H49.0165H46.8852H44.7538H42.6225H40.492H38.3607H36.2293H34.098H31.9675H29.8362H27.7048H25.5734H23.443H21.3116H19.1803H17.0489H14.9176H12.7871H10.6558V55.8011H12.7871H14.9176H17.0489H19.1803H21.3116H23.443H25.5734H27.7048H29.8362H31.9675H34.098H36.2293H38.3607H40.492H42.6225H44.7538H46.8852H49.0165H51.1479H53.2784H55.4097H57.5411H59.6724H61.8038H63.9342H66.0656H68.1969H70.3283H72.4588H74.5901H76.7215H78.8528H80.9833H83.1146H85.246H87.3773H89.5087H91.6392H93.7705H95.9019H98.0332H100.164H102.295H104.426H106.558H108.689H110.82H112.951H115.082H117.213H119.344V53.6547H117.213H115.082Z"
          fill="black"
        />
        <path
          d="M33.1077 15.8911V19.0411H20.5638V27.853H33.1077V31.003H20.5638V39.8148H17.4368V15.8911H33.1077ZM33.1077 19.0411H36.2347V27.853H33.1077V19.0411Z"
          fill="black"
        />
        <path
          d="M39.3628 15.8911H42.5273V36.6657H39.3628V15.8911ZM55.0667 36.6657V39.8148H42.5273V36.6657H55.0667Z"
          fill="black"
        />
        <path
          d="M73.7977 22.1894H76.9256V39.8148H73.7977V32.6108H61.2877V39.8148H58.1606V22.1894H61.2877V29.4608H73.7977V22.1894ZM64.4157 22.1894H61.2877V19.0411H64.4157V22.1894ZM64.4157 19.0402V15.8911H70.6706V19.0411L64.4157 19.0402ZM73.7977 22.1894H70.6706V19.0411H73.7977V22.1894Z"
          fill="black"
        />
        <path
          d="M83.1807 26.3116H80.0554V15.8911H83.1834L83.1807 26.3116ZM83.1807 29.4617V26.3116H86.3077V29.4608L83.1807 29.4617ZM86.3077 29.4617H89.4687V39.8148H86.3077V29.4617ZM89.4687 29.4617V26.3116H92.5966V29.4608L89.4687 29.4617ZM92.5627 15.8911H95.6907V26.3116H92.5627V15.8911Z"
          fill="black"
        />
        <path
          d="M112.564 26.8278V24.6814H110.433V22.535H108.301V20.3886H106.171V18.2431H104.04V16.0967H101.908V18.2431V20.3886V22.535V24.6814V26.8278V28.9733V31.1197V33.2661V35.4125V37.5589V39.7044H104.04V37.5589H106.171V35.4125H108.301V33.2661H110.433V31.1197H112.564V28.9733H114.695V26.8278H112.564Z"
          fill="black"
        />
      </svg>
    </button>
  )
}

const PlayButtonLarge = () => {
  return (
    <a>
      <svg
        width="191"
        height="97"
        viewBox="0 0 191 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3_1155)">
          <path
            d="M10.5958 11.0059V13.6152V16.2253V18.8354V21.4447V24.0547V26.6648V29.2741V31.8842V34.4942V37.1035V39.7136V42.3237V44.933V47.543V50.1531V52.7624V55.3725V57.9825V60.5918V63.2019V65.812V68.4213V71.0313V73.6414H13.2442V76.2507H15.8933H18.5425H21.1909H23.84H26.4892H29.1375H31.7867H34.4358H37.0842H39.7333H42.3825H45.0309H47.68H50.3292H52.9775H55.6267H58.2758H60.9242H63.5733H66.2225H68.8709H71.52H74.1692H76.8175H79.4667H82.1158H84.7642H87.4133H90.0625H92.7109H95.36H98.0092H100.658H103.307H105.956H108.604H111.253H113.902H116.551H119.2H121.849H124.498H127.147H129.796H132.444H135.093H137.742H140.391H143.04H145.689H148.338H150.987H153.636H156.284H158.933H161.582H164.231H166.88H169.529H172.178H174.827H177.476V73.6414H180.124V71.0313V68.4213V65.812V63.2019V60.5918V57.9825V55.3725V52.7624V50.1531V47.543V44.933V42.3237V39.7136V37.1035V34.4942V31.8842V29.2741V26.6648V24.0547V21.4447V18.8354V16.2253V13.6152V11.0059V8.39588V5.78581H177.476V3.17651H174.827H172.178H169.529H166.88H164.231H161.582H158.933H156.284H153.636H150.987H148.338H145.689H143.04H140.391H137.742H135.093H132.444H129.796H127.147H124.498H121.849H119.2H116.551H113.902H111.253H108.604H105.956H103.307H100.658H98.0092H95.36H92.7109H90.0625H87.4133H84.7642H82.1158H79.4667H76.8175H74.1692H71.52H68.8709H66.2225H63.5733H60.9242H58.2758H55.6267H52.9775H50.3292H47.68H45.0309H42.3825H39.7333H37.0842H34.4358H31.7867H29.1375H26.4892H23.84H21.1909H18.5425H15.8933H13.2442V5.78581H10.5958V8.39588V11.0059Z"
            fill="#0061FF"
          />
          <path
            d="M2.64915 28.7108V31.3208V33.9309V36.5402V39.1503V41.7603V44.3696V46.9797V49.5898V52.1991V54.8092V57.4192V60.0285V62.6386V65.2487V67.8579V70.468V73.0781V75.6874V78.2974V80.9075H5.29752V83.5168H7.94667V86.1269H10.5958H13.2442H15.8933H18.5425H21.1909H23.84H26.4892H29.1375H31.7867H34.4358H37.0842H39.7333H42.3825H45.0309H47.68H50.3292H52.9775H55.6267H58.2758H60.9242H63.5734H66.2225H68.8709H71.52H74.1692H76.8175H79.4667H82.1159H84.7642H87.4134H90.0625H92.7109H95.36H98.0092H100.658H103.307H105.956H108.604H111.253H113.903H116.551H119.2H121.849H124.498H127.147H129.796H132.444H135.093H137.743H140.391H143.04H145.689H148.338H150.987H153.636H156.284H158.933H161.583H164.231H166.88H169.529H172.178H174.827H177.476H180.124H182.773V83.5168H185.423V80.9075H188.071V78.2974V75.6874V73.0781V70.468V67.8579V65.2487V62.6386V60.0285V57.4192V54.8092V52.1991V49.5898V46.9797V44.3696V41.7603V39.1503V36.5402V33.9309V31.3208V28.7108V26.1015V23.4914H185.423V20.8813H182.773V21.4446V24.0546V26.6647V29.274V31.8841V34.4941V37.1034V39.7135V42.3236V44.9329V47.5429V50.153V52.7623V55.3724V57.9824V60.5917V63.2018V65.8119V68.4212V71.0312V73.6413H180.124V76.2506H177.476V78.8607H174.827H172.178H169.529H166.88H164.231H161.583H158.933H156.284H153.636H150.987H148.338H145.689H143.04H140.391H137.743H135.093H132.444H129.796H127.147H124.498H121.849H119.2H116.551H113.903H111.253H108.604H105.956H103.307H100.658H98.0092H95.36H92.7109H90.0625H87.4134H84.7642H82.1159H79.4667H76.8175H74.1692H71.52H68.8709H66.2225H63.5734H60.9242H58.2758H55.6267H52.9775H50.3292H47.68H45.0309H42.3825H39.7333H37.0842H34.4358H31.7867H29.1375H26.4892H23.84H21.1909H18.5425H15.8933H13.2442V76.2506H10.5958V73.6413H7.94667V71.0312V68.4212V65.8119V63.2018V60.5917V57.9824V55.3724V52.7623V50.153V47.5429V44.9329V42.3236V39.7135V37.1034V34.4941V31.8841V29.274V26.6647V24.0546V21.4446V20.8813H5.29752V23.4914H2.64915V26.1015V28.7108Z"
            fill="#00B75B"
          />
          <path
            d="M188.071 83.5168H185.423V86.1269H182.773V88.737H180.124H177.476H174.827H172.178H169.529H166.88H164.231H161.583H158.933H156.284H153.636H150.987H148.338H145.689H143.04H140.391H137.743H135.093H132.444H129.796H127.147H124.498H121.849H119.2H116.551H113.903H111.253H108.604H105.956H103.307H100.658H98.0092H95.36H92.7109H90.0625H87.4134H84.7642H82.1159H79.4667H76.8175H74.1692H71.52H68.8709H66.2225H63.5734H60.9242H58.2758H55.6267H52.9775H50.3292H47.68H45.0309H42.3825H39.7333H37.0842H34.4358H31.7867H29.1375H26.4892H23.84H21.1909H18.5425H15.8933H13.2442H10.5958H7.94667V86.1269H5.29752V83.5168H2.64915V86.1269V88.737H5.29752V91.3463H7.94667V93.9564H10.5958H13.2442H15.8933H18.5425H21.1909H23.84H26.4892H29.1375H31.7867H34.4358H37.0842H39.7333H42.3825H45.0309H47.68H50.3292H52.9775H55.6267H58.2758H60.9242H63.5734H66.2225H68.8709H71.52H74.1692H76.8175H79.4667H82.1159H84.7642H87.4134H90.0625H92.7109H95.36H98.0092H100.658H103.307H105.956H108.604H111.253H113.903H116.551H119.2H121.849H124.498H127.147H129.796H132.444H135.093H137.743H140.391H143.04H145.689H148.338H150.987H153.636H156.284H158.933H161.583H164.231H166.88H169.529H172.178H174.827H177.476H180.124H182.773V91.3463H185.423V88.737H188.071V86.1269V83.5168Z"
            fill="#00B75B"
          />
          <path
            d="M182.773 20.8815H185.423V18.2722H182.773V18.8354V20.8815Z"
            fill="black"
          />
          <path
            d="M188.072 20.8813H185.423V23.4914H188.072V20.8813Z"
            fill="black"
          />
          <path
            d="M188.071 26.1015V28.7108V31.3209V33.9309V36.5402V39.1503V41.7604V44.3697V46.9797V49.5898V52.1991V54.8092V57.4192V60.0285V62.6386V65.2486V67.8579V70.468V73.0781V75.6874V78.2974V80.9075H185.423V83.5168H188.071V86.1269V88.7369H190.72V86.1269V83.5168V80.9075V78.2974V75.6874V73.0781V70.468V67.8579V65.2486V62.6386V60.0285V57.4192V54.8092V52.1991V49.5898V46.9797V44.3697V41.7604V39.1503V36.5402V33.9309V31.3209V28.7108V26.1015V23.4915H188.071V26.1015Z"
            fill="black"
          />
          <path
            d="M188.072 88.7371H185.423V91.3471H188.072V88.7371Z"
            fill="black"
          />
          <path
            d="M185.423 91.3462H182.773V93.9563H185.423V91.3462Z"
            fill="black"
          />
          <path
            d="M177.476 93.9563H174.827H172.178H169.529H166.88H164.231H161.583H158.934H156.284H153.636H150.987H148.338H145.689H143.04H140.391H137.743H135.093H132.444H129.796H127.147H124.498H121.849H119.2H116.551H113.903H111.253H108.604H105.956H103.307H100.658H98.0093H95.3601H92.711H90.0626H87.4134H84.7643H82.1159H79.4668H76.8176H74.1692H71.5201H68.8709H66.2226H63.5734H60.9242H58.2759H55.6267H52.9776H50.3292H47.68H45.0309H42.3825H39.7334H37.0842H34.4359H31.7867H29.1375H26.4892H23.84H21.1909H18.5425H15.8933H13.2442H10.5958H7.94667V96.5664H10.5958H13.2442H15.8933H18.5425H21.1909H23.84H26.4892H29.1375H31.7867H34.4359H37.0842H39.7334H42.3825H45.0309H47.68H50.3292H52.9776H55.6267H58.2759H60.9242H63.5734H66.2226H68.8709H71.5201H74.1692H76.8176H79.4668H82.1159H84.7643H87.4134H90.0626H92.711H95.3601H98.0093H100.658H103.307H105.956H108.604H111.253H113.903H116.551H119.2H121.849H124.498H127.147H129.796H132.444H135.093H137.743H140.391H143.04H145.689H148.338H150.987H153.636H156.284H158.934H161.583H164.231H166.88H169.529H172.178H174.827H177.476H180.124H182.774V93.9563H180.124H177.476Z"
            fill="black"
          />
          <path
            d="M2.64915 83.5168H5.29752V80.9075H2.64915V78.2974V75.6874V73.0781V70.468V67.8579V65.2486V62.6386V60.0285V57.4192V54.8092V52.1991V49.5898V46.9797V44.3697V41.7604V39.1503V36.5402V33.9309V31.3209V28.7108V26.1015V23.4915H0V26.1015V28.7108V31.3209V33.9309V36.5402V39.1503V41.7604V44.3697V46.9797V49.5898V52.1991V54.8092V57.4192V60.0285V62.6386V65.2486V67.8579V70.468V73.0781V75.6874V78.2974V80.9075V83.5168V86.1269V88.7369H2.64915V86.1269V83.5168Z"
            fill="black"
          />
          <path
            d="M5.29831 88.7371H2.64915V91.3471H5.29831V88.7371Z"
            fill="black"
          />
          <path
            d="M7.94667 91.3462H5.29752V93.9563H7.94667V91.3462Z"
            fill="black"
          />
          <path
            d="M185.423 83.5168H182.773V86.1269H185.423V83.5168Z"
            fill="black"
          />
          <path
            d="M7.94667 18.8354V18.2722H5.29752V20.8815H7.94667V18.8354Z"
            fill="black"
          />
          <path
            d="M5.29831 20.8813H2.64915V23.4914H5.29831V20.8813Z"
            fill="black"
          />
          <path
            d="M7.94667 83.5168H5.29752V86.1269H7.94667V83.5168Z"
            fill="black"
          />
          <path
            d="M177.476 86.127H174.827H172.178H169.529H166.88H164.231H161.583H158.934H156.284H153.636H150.987H148.338H145.689H143.04H140.391H137.743H135.093H132.444H129.796H127.147H124.498H121.849H119.2H116.551H113.903H111.253H108.604H105.956H103.307H100.658H98.0093H95.3601H92.711H90.0626H87.4134H84.7643H82.1159H79.4668H76.8176H74.1692H71.5201H68.8709H66.2226H63.5734H60.9242H58.2759H55.6267H52.9776H50.3292H47.68H45.0309H42.3825H39.7334H37.0842H34.4359H31.7867H29.1375H26.4892H23.84H21.1909H18.5425H15.8933H13.2442H10.5958H7.94667V88.737H10.5958H13.2442H15.8933H18.5425H21.1909H23.84H26.4892H29.1375H31.7867H34.4359H37.0842H39.7334H42.3825H45.0309H47.68H50.3292H52.9776H55.6267H58.2759H60.9242H63.5734H66.2226H68.8709H71.5201H74.1692H76.8176H79.4668H82.1159H84.7643H87.4134H90.0626H92.711H95.3601H98.0093H100.658H103.307H105.956H108.604H111.253H113.903H116.551H119.2H121.849H124.498H127.147H129.796H132.444H135.093H137.743H140.391H143.04H145.689H148.338H150.987H153.636H156.284H158.934H161.583H164.231H166.88H169.529H172.178H174.827H177.476H180.124H182.774V86.127H180.124H177.476Z"
            fill="black"
          />
          <path
            d="M13.245 3.17651H10.5958V5.78658H13.245V3.17651Z"
            fill="black"
          />
          <path
            d="M13.245 73.6414H10.5958V76.2514H13.245V73.6414Z"
            fill="black"
          />
          <path
            d="M180.125 3.17651H177.476V5.78658H180.125V3.17651Z"
            fill="black"
          />
          <path
            d="M180.125 73.6414H177.476V76.2514H180.125V73.6414Z"
            fill="black"
          />
          <path
            d="M7.94667 20.8815V21.4448V24.0548V26.6649V29.2742V31.8843V34.4943V37.1036V39.7137V42.3238V44.9331V47.5431V50.1532V52.7625V55.3726V57.9826V60.5919V63.202V65.8121V68.4213V71.0314V73.6415H10.5958V71.0314V68.4213V65.8121V63.202V60.5919V57.9826V55.3726V52.7625V50.1532V47.5431V44.9331V42.3238V39.7137V37.1036V34.4943V31.8843V29.2742V26.6649V24.0548V21.4448V18.8355V16.2254V13.6153V11.006V8.39596V5.78589H7.94667V8.39596V11.006V13.6153V16.2254V18.2722V18.8355V20.8815Z"
            fill="black"
          />
          <path
            d="M180.124 11.006V13.6153V16.2254V18.8355V21.4448V24.0548V26.6649V29.2742V31.8843V34.4943V37.1036V39.7137V42.3238V44.9331V47.5431V50.1532V52.7625V55.3726V57.9826V60.5919V63.202V65.8121V68.4213V71.0314V73.6415H182.773V71.0314V68.4213V65.8121V63.202V60.5919V57.9826V55.3726V52.7625V50.1532V47.5431V44.9331V42.3238V39.7137V37.1036V34.4943V31.8843V29.2742V26.6649V24.0548V21.4448V20.8815V18.8355V18.2722V16.2254V13.6153V11.006V8.39596V5.78589H180.124V8.39596V11.006Z"
            fill="black"
          />
          <path
            d="M18.5425 3.17647H21.1909H23.84H26.4892H29.1375H31.7867H34.4358H37.0842H39.7333H42.3825H45.0309H47.68H50.3292H52.9775H55.6267H58.2758H60.9242H63.5734H66.2225H68.8709H71.52H74.1692H76.8175H79.4667H82.1159H84.7642H87.4134H90.0625H92.7109H95.36H98.0092H100.658H103.307H105.956H108.604H111.253H113.903H116.551H119.2H121.849H124.498H127.147H129.796H132.444H135.093H137.743H140.391H143.04H145.689H148.338H150.987H153.636H156.284H158.933H161.583H164.231H166.88H169.529H172.178H174.827H177.476V0.566406H174.827H172.178H169.529H166.88H164.231H161.583H158.933H156.284H153.636H150.987H148.338H145.689H143.04H140.391H137.743H135.093H132.444H129.796H127.147H124.498H121.849H119.2H116.551H113.903H111.253H108.604H105.956H103.307H100.658H98.0092H95.36H92.7109H90.0625H87.4134H84.7642H82.1159H79.4667H76.8175H74.1692H71.52H68.8709H66.2225H63.5734H60.9242H58.2758H55.6267H52.9775H50.3292H47.68H45.0309H42.3825H39.7333H37.0842H34.4358H31.7867H29.1375H26.4892H23.84H21.1909H18.5425H15.8933H13.2442V3.17647H15.8933H18.5425Z"
            fill="black"
          />
          <path
            d="M172.178 76.2507H169.529H166.88H164.231H161.583H158.933H156.284H153.636H150.987H148.338H145.689H143.04H140.391H137.743H135.093H132.444H129.796H127.147H124.498H121.849H119.2H116.551H113.903H111.253H108.604H105.956H103.307H100.658H98.0092H95.36H92.7109H90.0625H87.4134H84.7642H82.1159H79.4667H76.8175H74.1692H71.52H68.8709H66.2225H63.5734H60.9242H58.2758H55.6267H52.9775H50.3292H47.68H45.0309H42.3825H39.7333H37.0842H34.4358H31.7867H29.1375H26.4892H23.84H21.1909H18.5425H15.8933H13.2442V78.8608H15.8933H18.5425H21.1909H23.84H26.4892H29.1375H31.7867H34.4358H37.0842H39.7333H42.3825H45.0309H47.68H50.3292H52.9775H55.6267H58.2758H60.9242H63.5734H66.2225H68.8709H71.52H74.1692H76.8175H79.4667H82.1159H84.7642H87.4134H90.0625H92.7109H95.36H98.0092H100.658H103.307H105.956H108.604H111.253H113.903H116.551H119.2H121.849H124.498H127.147H129.796H132.444H135.093H137.743H140.391H143.04H145.689H148.338H150.987H153.636H156.284H158.933H161.583H164.231H166.88H169.529H172.178H174.827H177.476V76.2507H174.827H172.178Z"
            fill="black"
          />
          <path
            d="M75.6876 15.8154V18.4038H65.1672V25.6344H75.6876V28.2189H65.1672V35.4479H62.5417V15.8154H75.6876ZM75.6876 18.4H78.3108V25.6305H75.6876V18.4Z"
            fill="white"
          />
          <path
            d="M80.9332 15.8154H83.5847V32.8595H80.9332V15.8154ZM94.105 32.8595V35.4479H83.5847V32.8634L94.105 32.8595Z"
            fill="white"
          />
          <path
            d="M109.815 20.9845H112.437V35.4479H109.815V29.5367H99.3223V35.4479H96.6991V20.9845H99.3223V26.9499H109.815V20.9845ZM101.945 20.9845H99.3223V18.4038H101.945V20.9845ZM101.945 18.4V15.8154H107.192V18.4038L101.945 18.4ZM109.815 20.9845H107.192V18.4038H109.815V20.9845Z"
            fill="white"
          />
          <path
            d="M117.684 24.3692H115.061V15.8154H117.684V24.3692ZM117.684 26.9537V24.3692H120.307V26.9537H117.684ZM120.307 26.9537H122.958V35.4479H120.307V26.9537ZM122.958 26.9537V24.3692H125.581V26.9537H122.958ZM125.553 15.8193H128.176V24.3692H125.553V15.8193Z"
            fill="white"
          />
          <path
            d="M41.5175 61.0279H52.0379V63.6124H38.8951V43.9814H52.0379V46.5659H41.5175V61.0279ZM52.0379 46.5659V61.0279H54.6611V46.5659H52.0379Z"
            fill="white"
          />
          <path
            d="M57.2843 63.6126V61.0281H59.9075V63.6126H57.2843Z"
            fill="white"
          />
          <path
            d="M62.5299 52.3943V46.5659H65.1531V52.3943H62.5299ZM62.5299 61.0279V58.4433H65.1531V61.0279H62.5299ZM65.1531 46.5659V43.9814H75.6734V46.5659H65.1531ZM65.1531 54.9788V52.3943H75.6734V54.9788H65.1531ZM65.1531 63.6124V61.0279H75.6734V63.6124H65.1531ZM75.6734 49.1505V46.5659H78.3241V49.1505H75.6734ZM75.6734 61.0279V54.9788H78.3241V61.0279H75.6734Z"
            fill="white"
          />
          <path
            d="M94.0626 43.9814V46.5659H83.5422V53.7965H94.0626V56.381H83.5422V63.6124H80.919V43.9814H94.0626ZM94.0626 46.5659H96.6858V53.7965H94.0626V46.5659Z"
            fill="white"
          />
          <path
            d="M112.424 49.1505H115.047V63.6124H112.424V57.7012H101.931V63.6124H99.309V49.1505H101.931V55.1159H112.424V49.1505ZM104.555 49.1505H101.931V46.5659H104.555V49.1505ZM104.555 46.5659V43.9814H109.8V46.5659H104.555ZM112.424 49.1505H109.8V46.5659H112.424L112.424 49.1505Z"
            fill="white"
          />
          <path
            d="M130.841 52.5322V55.1167H133.464V63.6124H130.841V57.7012H128.218V55.1167H120.321V63.6124H117.67V43.9814H130.841V46.5659H120.321V52.5314L130.841 52.5322ZM130.841 46.5667H133.464V52.5322H130.841V46.5667Z"
            fill="white"
          />
          <path
            d="M141.332 54.3195V56.9078H138.709V63.6162H136.087V43.9814H138.71V54.3195H141.332ZM141.332 54.3195V51.735H143.955V54.3195H141.332ZM143.955 51.735V49.1505H146.578V51.735H143.955ZM143.955 56.904V54.3195H146.578V56.9078L143.955 56.904ZM146.578 49.1505V46.5659H149.202V49.1505H146.578ZM146.578 59.4877V56.9078H149.202V59.4916L146.578 59.4877ZM149.202 46.5659V43.9814H151.825V46.5659H149.202ZM149.202 63.61V59.4877H151.825V63.6124L149.202 63.61Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_3_1155">
            <rect
              width="190.72"
              height="96"
              fill="white"
              transform="translate(0 0.566406)"
            />
          </clipPath>
        </defs>
      </svg>
    </a>
  )
}

const PixelGrid = ({ children }) => {
  const size = 10
  const [positions, setPositions] = useState([])

  const callBackRef = useCallback((domNode) => {
    if (domNode) {
      const { width, height } = domNode.getBoundingClientRect()
      const cols = Math.floor(width / size)
      const rows = Math.floor(height / size)

      const createGrid = () => {
        setPositions(
          [...Array(3)].map((_) => ({
            x: Math.floor(Math.random() * cols) * size,
            y: Math.floor(Math.random() * rows) * size,
          }))
        )
      }

      createGrid()

      setInterval(createGrid, 3000)
    }
  }, [])

  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 200])

  return (
    <div className="relative" ref={callBackRef}>
      <div className="relative z-50">{children}</div>

      <div className="absolute inset-0 z-40">
        <svg width="auto" height="auto">
          {positions.map((position, index) => (
            <rect
              key={index}
              x={position.x}
              y={position.y}
              width={size}
              height={size}
              fill="#000"
            />
          ))}
        </svg>
      </div>
    </div>
  )
}
