import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Web3Modal from "web3modal";
import NFT from '../engine/NFT.json';
import Market from '../engine/Market.json';
import { mmnft, mmmarket } from '../engine/configuration';
import { goenft, goemarket } from '../engine/configuration';
import { hhnft, hhmarket } from '../engine/configuration';
import { bsctnft, bsctmarket } from '../engine/configuration';
import detectEthereumProvider from '@metamask/detect-provider';
import { Card, Button, Input, Col, Row, Spacer, Container, Text } from '@nextui-org/react';
import { client } from '../engine/configuration';


export default function createMarket() {
    const [fileUrl, setFileUrl] = useState(null)
    const [nftcontract, getNft] = useState([])
    const [market, getMarket] = useState([])
    
    const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })

    useEffect(() => {
      setNft();
    }, [getNft, getMarket])

    const router = useRouter()

    async function onChange(e) {
        const file = e.target.files[0]
        try {
            const added = await client.add(
                file,
                {
                    progress: (prog) => console.log(`received: ${prog}`)
                }
            )
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setFileUrl(url)
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }

    async function createMarket() {
        const { name, description, price } = formInput
        if (!name || !description || !price || !fileUrl) return
        const data = JSON.stringify({
            name, description, image: fileUrl
        })
        try {
            const added = await client.add(data)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            createNFT(url)
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }

    async function setNft(){
      const web3Modal = new Web3Modal()
      await web3Modal.connect();
      var hh = "0x7a69";
      var goe = "0x5";
      var mm = "0x13881";
      var bsct = "0x61";
      const connected = await detectEthereumProvider();
      if (connected.chainId == hh) {
        var nftcontract = hhnft
      }
      else if (connected.chainId == goe) {
        var nftcontract = goenft
      }
      else if (connected.chainId == mm) {
        var nftcontract = mmnft
      }
      else if (connected.chainId == bsct) {
        var nftcontract = bsctnft
      }
      getNft(nftcontract);
      console.log(nftcontract)
      setMarket();
    }

    async function setMarket(){
      var hh = "0x7a69";
      var goe = "0x5";
      var mm = "0x13881";
      var bsct = "0x61";
      const connected = await detectEthereumProvider();
      if (connected.chainId == hh) {
        var market = hhmarket
      }
      else if (connected.chainId == goe) {
        var market = goemarket
      }
      else if (connected.chainId == mm) {
        var market = mmmarket
      }
      else if (connected.chainId == bsct) {
        var market = bsctmarket
      }
      getMarket(market);
      console.log(market)
    }

    async function createNFT(url) {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        let contract = new ethers.Contract(nftcontract, NFT, signer)
        let transaction = await contract.createNFT(url)
        let tx = await transaction.wait()
        let event = tx.events[0]
        let value = event.args[2]
        let tokenId = value.toNumber()
        const price = ethers.utils.parseUnits(formInput.price, 'ether')
        contract = new ethers.Contract(market, Market, signer)
        let listingFee = await contract.getListingFee()
        listingFee = listingFee.toString()
        transaction = await contract.createVaultItem(nftcontract, tokenId, price, { value: listingFee })
        await transaction.wait()
        router.push('/')
    }

    async function buyNFT() {
        const { name, description } = formInput
        if (!name || !description || !fileUrl) return
        const data = JSON.stringify({
            name, description, image: fileUrl
        })
        try {
            const added = await client.add(data)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            mintNFT(url)
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }

    async function mintNFT(url) {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        let contract = new ethers.Contract(nftcontract, NFT, signer)
        let cost = await contract.cost()
        let transaction = await contract.mintNFT(url, { value: cost })
        await transaction.wait()
        router.push('/portal')
    }

    return (
      <div>
        <Spacer></Spacer>
        <Container lg gap={2} css={{ fontFamily: 'SF Pro Display', fontWeight: '200' }}>
        <Text h2>The Block Market NFT Asset Creator</Text>
          <Row gap={4}>
            <Col>
            <Spacer></Spacer>
            <Spacer></Spacer>
              <Spacer></Spacer>
              <Text h3 className='ml-3'>The World's First Crypto Asset Management Marketplace</Text>
              <Spacer></Spacer>
              <img src='logo1.png' width={"300px"} />
              <Text h4 className='ml-3'>More Than Your Average Token!</Text>
            </Col>
            <Col css={{ marginRight: '$7' }}>
            <Spacer></Spacer>
              <Card css={{ marginTop: '$5', marginBottom: '$5' }}>
                <Card.Body style={{ backgroundColor: "#00000040" }}>
                  <Text>Select your Preferred Network, Create your Asset by uploading your image and information.</Text>
                </Card.Body>
              </Card>
              {/*<img src='image1.jpeg' />*/}
              <Card css={{ marginTop: '$5' }} >
                <Card.Body style={{ backgroundColor: "#00000040" }}>
                  <Text>Our Multi-Chain Asset Management Marketplace allows you to sell your asset and accept your favorite crypto as payment worldwide with no restrictions.</Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Spacer></Spacer>
              <Text h3>Enter Information Below to Create and Sell your Assets in the Marketplace</Text>
              <Card css={{ border:'#6a0dad'  }} style={{ maxWidth: '300px', background: '#ffffff05', boxShadow: '0px 0px 5px #6a0dad' }}>
                <Card css={{ marginTop: '$1', border:'#6a0dad'  }}>
                  <Card.Body style={{ backgroundColor: "#000000", border:'#6a0dad' }}>
                  <Input
                  placeholder='Enter your NFT Name'
                  onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
                />
                </Card.Body>
                </Card>
                <Card css={{ border:'#6a0dad'  }}>
              <Card.Body css={{ border:'#6a0dad'  }}  style={{ backgroundColor: "#000000" }}>
                <Input
                  placeholder="NFT Description"
                  onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
                  css={{ border:'#6a0dad'  }}
                />
              </Card.Body>
            </Card>
            <Card css={{ border:'#6a0dad'  }}>
              <Card.Body css={{ border:'#6a0dad'  }}  style={{ backgroundColor: "#000000" }}>
                <input
                  type="file"
                  name="Asset"
                  onChange={onChange}
                  css={{ border:'#6a0dad'  }}
                />
                {
                  fileUrl && (
                    <img className="rounded " width="350" src={fileUrl} />
                  )
                }
              </Card.Body>
            </Card>
            <Container css={{ marginBottom: '$2', border:'#6a0dad' }}>
              <Input
                css={{ marginTop: '$2' }}
                placeholder="Set your price in BREX"
                onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
              />
              <Button size="sm" style={{ fontSize: '20px' }} onPress={createMarket
              } css={{ marginTop: '$2', marginBottom: '$5', color:'$gradient' }}>
                List your Asset!
              </Button>
           <Button size="sm" style={{ fontSize: '20px' }} onPress={mintNFT} css={{ marginTop: '$2', marginBottom: '$5', color:'$gradient' }}>
                Buy your Asset!
              </Button>
              </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)
}