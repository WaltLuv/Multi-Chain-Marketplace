import { createTheme, NextUIProvider } from "@nextui-org/react";
import Link from 'next/link'
import { Spacer, Button, Col, Row, Container, Dropdown } from '@nextui-org/react';
import react from "react";
import Connectchain from "../engine/connectchain";
import Footer from "./footer"

const theme = createTheme({
  type: "dark",
  theme: {
    fontFamily:'SF Pro Display',
    colors: {
      primaryLight: '$blue200',
      primaryLightHover: '$blue300',
      primaryLightActive: '$blue400',
      primaryLightContrast: '$blue600',
      primary: '$purple500',
      primaryBorder: '$blue500',
      primaryBorderHover: '$blue600',
      primarySolidHover: '$blue700',
      primarySolidContrast: '$white',
      primaryShadow: '$white500',
      transparent: '#00000000',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple300 90%)',
      link: '#5E1DAD',

      myColor: '#00000030'

    },
    space: {},
    fonts: {}
  }
})

function MyApp({ Component, pageProps }) {
  
  return(
    <div>
<div style={{background:'black'}} >
            <Container lg css={{marginTop:'$5'}}>
            <Row justify="center">
            <Col css={{ marginTop: '$8', marginLeft:'$10' }}>
              <img style={{height:'65', width:'65px'}} src="logo1.png" />
            </Col>
            <Col css={{ marginTop: '$8' }} >
            <Link href="/">
              <Button size="sm" style={{background:'#A020F0', boxShadow:'0px 0px 4px #ffffff'}}>
                  <a style={{
                    fontFamily: 'SF Pro Display',
                    fontWeight: '500',
                    color: 'white',
                    fontSize: '20px',
                    hover:'#A020F0'
                  }}>
                   Home
                  </a>
              </Button>
              </Link>
            </Col>
            <Col css={{ marginTop: '$8' }} >
                <Link href="/dashboard">
                <Button size="sm" style={{background:'#A020F0', boxShadow:'0px 0px 4px #ffffff'}}>
                  <a style={{
                    fontFamily: 'SF Pro Display',
                    fontWeight: '500',
                    color: 'white',
                    fontSize: '20px',
                    hover:'#A020F0',
                  }}>
                    Dashboard
                  </a>
                  </Button>
                </Link>
            </Col>
            <Col css={{ marginTop: '$8' }} >
            <Button size="sm"
            style={{background:'#A020F0', boxShadow:'0px 0px 4px #ffffff'}}>
                <Link href="/portal">
                  <a style={{
                    fontFamily: 'SF Pro Display',
                    fontWeight: '500',
                    color: 'white',
                    fontSize: '20px',
                  }}>
                    NFT Portal
                  </a>
                </Link>
              </Button>
            </Col>
            <Col css={{ marginTop: '$8' }} >
                <Link href="/create">
                <Button size="sm" style={{background:'#A020F0', boxShadow:'0px 0px 4px #ffffff'}}>
                  <a style={{
                    fontFamily: 'SF Pro Display',
                    fontWeight: '500',
                    color: 'white',
                    fontSize: '20px',
                    hover:'#A020F0',
                  }}>
                    Creator Portal
                  </a>
                  </Button>
                </Link>
            </Col>
            <Col css={{ marginTop: '$8' }} >
                <Link href="/collections">
                <Button size="sm" style={{background:'#A020F0', boxShadow:'0px 0px 4px #ffffff'}}>
                  <a style={{
                    fontFamily: 'SF Pro Display',
                    fontWeight: '500',
                    color: 'white',
                    fontSize: '20px',
                    hover:'#A020F0',
                  }}>
                    Upload
                  </a>
                  </Button>
                </Link>
            </Col>
            <Col css={{ marginTop: '$8' }} >
                <Link href="/collections">
                <Button size="sm" style={{background:'#A020F0', boxShadow:'0px 0px 4px #ffffff'}}>
                  <a style={{
                    fontFamily: 'SF Pro Display',
                    fontWeight: '500',
                    color: 'white',
                    fontSize: '20px',
                    hover:'#A020F0',
                  }}>
                    BRG Portal
                  </a>
                  </Button>
                </Link>
            </Col>
            < Connectchain />
            </Row>
 </Container>
 <NextUIProvider theme={theme}>
<Component {...pageProps} />
</NextUIProvider>
<Footer />
</div>
</div>

  )
  
  
}

export default MyApp
