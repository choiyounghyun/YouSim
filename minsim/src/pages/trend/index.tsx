import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import DescribeText from 'src/components/DescribeText'
import NavBar from 'src/components/NavBar'
import SimpleWordCloud from 'src/components/WordCloud'

import { useEffect, useState } from 'react'
import { useQuery } from "react-query";

import { TrendSectionStyle } from 'styles/trend/SectionStyle'
import { WordCloudContainer } from 'styles/trend/WordcloudStyle'
import apitrendList from '../api/apitrendList'


const TrendPage: NextPage = () => {
  const router = useRouter();
  const query = router.query
  const [flag, setFlag] = useState(false)
  const {
    data: trendList,
    error,
    status,
  } = useQuery(
    ["trendList", flag ],
    () => {
      apitrendList();
    },
  );
  useEffect(()=>{
    setFlag(true)
  },[])
  console.log(trendList)
  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message} </span>;
  }
  


  return (
    <div>
      <Head>
        <title>Trend</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <TrendSectionStyle>
          <DescribeText
              mainText='Trend 정보' 
              subText1='키워드입니다.'
              subText2='현재 인기동영상의 키워드를 확인해 보세요.'/>
        </TrendSectionStyle>
        <WordCloudContainer>
          <SimpleWordCloud />
        </WordCloudContainer>
      </main>
    </div>
  )
}

export default TrendPage
