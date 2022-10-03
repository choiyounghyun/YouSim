import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Chart from '/public/images/chart.png'
import { GetServerSideProps } from 'next'
import type { NextApiRequest, NextApiResponse } from 'next'
import NavBar from 'src/components/NavBar'
import SearchBar from 'src/components/SearchBar'
import DescribeText from 'src/components/DescribeText'

import { SloganContainer } from 'styles/mainStyles/IndexStyle'
import IntroductionSearchBar from 'src/components/IntroductionSearchBar'
import { LightSection } from 'styles/mainStyles/LightSectionStyle'
import { IntroductionVideoContainer, IntroductionDivAnimation1, IntroductionDivAnimation2 } from 'styles/mainStyles/IntroductionVideoStyle'
import { Spinner } from 'styles/componentStyles/SpinnerStyle'
import { ImgFrameContainer } from 'styles/mainStyles/ImgFrameStyle'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { useRef, useEffect } from 'react'

export const HOME_URL = process.env.NEXT_PUBLIC_API_URL;

const Home: NextPage = (props) => {  

  const DivAnimationRef1 = useRef(null)
  const DivAnimationRef2 = useRef(null)
  useEffect(() => {
    const el1 = DivAnimationRef1.current;
    const el2 = DivAnimationRef2.current;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(el1, {
      scrollTrigger: {
        // trigger가 작동하는 위치(class or id 지정가능)
        trigger: "#SloganContainer",
        // 화면에 marker를 띄워 animation 위치 확인가능
        // markers: true, 
        start: "top top",
        end: "+=800",
        scrub: true,
      },
      // x값이 음수이면 왼쪽 이동
      x: -300, duration: 2
      });
    gsap.to(el2, {
      scrollTrigger: {
        // trigger가 작동하는 위치(class or id 지정가능)
        trigger: "#SloganContainer",
        // 화면에 marker를 띄워 animation 위치 확인가능
        // markers: true, 
        start: "top top",
        end: "+=800",
        scrub: true,
      },
      // x값이 양수이면 오른쪽 이동
      x: 300, duration: 2
      });
    // ImgFrameContainer의 opacity의 초기값을 0으로 세팅
    gsap.set("#ImgFrameContainer", {
      opacity: 0,
      ease: "none",
      });
    gsap.to("#ImgFrameContainer", {
      ease: "none",
      opacity: 1,
      scrollTrigger: {
        trigger: '#ImgFrameStart',
        start: "-=400",
        end: "+=400",
        scrub: true,
        markers: true,
      },
      });
      gsap.set("#TrendImg", {
        opacity: 0,
        ease: "none",
        });
      gsap.to("#TrendImg", {
        ease: "none",
        opacity: 1,
        scrollTrigger: {
          trigger: '#TrendImgStart',
          start: "-=400",
          end: "+=400",
          scrub: true,
          markers: true,
        },
        });
      }, [])

  return (
    <>
      <Head>
        <title>민심</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        
        <section>
          <SloganContainer id='SloganContainer'>
            <h4 style={{'textAlign': 'center'}}>
              당신의 마음, 유튜브의 민심<br/>유심을 통해 유튜브의 민심을 쉽게 알아보세요.
            </h4>
          </SloganContainer>
        </section>
        <section>
          <DescribeText
            mainText='채널 정보' 
            subText1='채널을 검색해보세요.'
            subText2='다양한 정보가 당신을 기다리고 있습니다.'/>
          <IntroductionSearchBar/>
          <IntroductionVideoContainer id='IntroductionVideoContainer'>
            <IntroductionDivAnimation1 id='IntroductionDivAnimation1' ref={DivAnimationRef1}/>
            <IntroductionDivAnimation2 id='IntroductionDivAnimation2' ref={DivAnimationRef2}/>
          </IntroductionVideoContainer>
          <Spinner />
        </section>
        <section id="ImgFrameStart">
          <DescribeText
            mainText='민심 확인' 
            subText1='채널을 검색해보세요.'
            subText2='다양한 정보가 당신을 기다리고 있습니다.'/>
          <ImgFrameContainer id="ImgFrameContainer">
            <Image src={Chart} alt="배경 차트"/>
          </ImgFrameContainer>
        </section>
        <section id="TrendImgStart">
          <DescribeText 
            mainText='트렌드 서칭' 
            subText1='채널을 검색해보세요.'
            subText2='다양한 정보가 당신을 기다리고 있습니다.'/>
          <ImgFrameContainer id="TrendImg">
            <Image src={Chart} alt="배경 차트"/>
          </ImgFrameContainer>
        </section>
      </main>
    </>
  )
}

export default Home




export const getStaticProps: GetStaticProps = async () => {
  

  return {
    props: {

    }
  }
}

// export const getServerSideProps: GetServerSideProps = async () => {
  

//   return {
//     props: {

//     }
//   }
// }



