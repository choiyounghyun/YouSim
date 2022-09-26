import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Chart from '/public/images/chart.png'

import NavBar from 'src/components/NavBar'
import SearchBar from 'src/components/SearchBar'
import DescribeText from 'src/components/DescribeText'
import { ChangeNavStyle } from 'styles/componentStyles/NavBarStyle'

import { SloganContainer } from 'styles/mainStyles/IndexStyle'
import IntroductionSearchBar from 'src/components/IntroductionSearchBar'
import { LightSection } from 'styles/mainStyles/LightSectionStyle'
import { IntroductionVideoContainer, IntroductionDivAnimation1, IntroductionDivAnimation2 } from 'styles/mainStyles/IntroductionVideoStyle'
import { Spinner } from 'styles/componentStyles/SpinnerStyle'
import { ImgFrameContainer } from 'styles/mainStyles/ImgFrameStyle'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { CustomEase } from 'gsap/all'
import { useRef, useEffect } from 'react'

const Home: NextPage = () => {
  // gsap.registerPlugin(ScrollTrigger);
  // gsap.to("#IntroductionDivAnimation2", {
  //   scrollTrigger: {
  //     trigger: '#IntroductionDivAnimation2',
  //     markers: true,
  //     start: "top top",
  //     end: "top 800px",
  //     scrub: 1,
  //   }
  // });
  // let el = gsap.timeline();
  const DivAnimationRef1 = useRef(null)
  const DivAnimationRef2 = useRef(null)
  useEffect(() => {
    const el1 = DivAnimationRef1.current;
    const el2 = DivAnimationRef2.current;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(el1, {
      scrollTrigger: {
        trigger: "#SloganContainer",
        markers: true,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
      },
      x: -300, duration: 4
      });
    gsap.to(el2, {
      scrollTrigger: {
        trigger: "#SloganContainer",
        markers: true,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
      },
      x: 300, duration: 4
      });
    gsap.to("#NavStyle", {
      scrollTrigger: {
        trigger: '#NavStyle',
        markers:true,
        start: "top top",
        end: "+=200",
        scrub: true,
        pin: true,
        toggleClass:"#ChangeNavStyle"
      }});
      }, [])
      console.log(NavBar)
      console.log(SloganContainer)
      console.log(IntroductionDivAnimation1)
      
  return (
    <>
      <Head>
        <title>민심</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar/>
        <SearchBar />
        <section>
          <SloganContainer id='SloganContainer'>
            <h4>
              서비스 슬로건 및 비전뭐 그런거랑 간략한 설명 및 캐치프레이즈<br/>대통령은 국민의 보통·평등·직접·비밀선거에 의하여 선출한다. 
            </h4>
          </SloganContainer>
        </section>
        <section>
          <DescribeText
            mainText='채널 정보' 
            subText1='채널을 검색해보세요.'
            subText2='다양한 정보가 당신을 기다리고 있습니다.'/>
          <IntroductionSearchBar/>
          <IntroductionVideoContainer>
            <IntroductionDivAnimation1 id='IntroductionDivAnimation1' ref={DivAnimationRef1}/>
            <IntroductionDivAnimation2 id='IntroductionDivAnimation2' ref={DivAnimationRef2}/>
          </IntroductionVideoContainer>
          <Spinner />
        </section>
        <section>
          <DescribeText 
            mainText='민심 확인' 
            subText1='채널을 검색해보세요.'
            subText2='다양한 정보가 당신을 기다리고 있습니다.'/>
          <ImgFrameContainer>
            <Image src={Chart} alt="배경 차트"/>
          </ImgFrameContainer>
        </section>
        <section>
          <DescribeText 
            mainText='트렌드 서칭' 
            subText1='채널을 검색해보세요.'
            subText2='다양한 정보가 당신을 기다리고 있습니다.'/>
          <IntroductionVideoContainer />
        </section>
      </main>
    </>
  )
}

export default Home
