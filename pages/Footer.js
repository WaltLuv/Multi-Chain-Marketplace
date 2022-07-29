import { Text, Row, Spacer, Container, Col } from '@nextui-org/react';

export default function Footer() {

    const footer1 = [
        {
            id: 1,
            img: "discord.png",
            url: "https://discord.com/"
        },
        {
            id: 2,
            img: "twitter.png",
            url: "https://twitter.com/"
        }
    ]

    const footer2 = [
        {
            id: 1,
            img: "bsc.png"
        },
        {
            id: 2,
            img: "polygon.png"
        },
        {
            id: 3,
            img: "ethereum.png"
        }
    ]



return (
    <div>
    <Spacer></Spacer>
<Container style={{borderTop:'1px solid #fff'}}>
    <Container md gap={3}>
    <Spacer></Spacer>
                <Row gap={3}>
                    <Col>                            
                            <a href="/">
                            <Text h2 style={{color:"#fff",fontSmooth:"always",textShadow:"-0px 0px 3px #ffffff",fontFamily:"SF Pro Display",fontWeight:"700"}}>Block Republic Group</Text>
                            </a>
                            <Text style={{color:"#fff",fontSmooth:"always",fontFamily:"SF Pro Display"}}>A company that partners with developers, marketers, creators, and real estate professionals to develop and sell digital assets.</Text>
                       </Col>
                    </Row>
                    <Row gap={3}>
                    <Col>
                            <Text style={{marginTop:"3px"}} h4>Follow And Chat With Us On:</Text>
                            <ul>
                                {footer1.map((item, idx) => {
                                    return (
                                        <a href={item.url}><img src={item.img} style={{marginRight:'1px'}} width="150px" height="50px"></img></a>
                                    );
                                })}
                            </ul>
                    </Col>
                    <Col>
                            <Text h4>Blockchain Integrations</Text>
                            <ul>
                                {footer2.map((item, idx) => {
                                    return (
                                        <img src={item.img} style={{marginRight:'5px'}} width="150px" height="50px"></img>
                                    );
                                })}
                            </ul>
                    </Col>
                    <Col style={{marginLeft:'5px'}}>
                            <Text h4>NFT Collection Info</Text>
                               <a href="https://testnets.opensea.io/collection/blockmatic"><img src="logo.jpg"
                               style={{
                                   width:"200px"
                               }}
                               /></a>
                    </Col>
                </Row>
               <Row gap={3}>
                            <Text>©2022 Block Republic, All Rights Reserved.</Text>
                </Row>
    </Container>
    </Container>
    </div>
);

}