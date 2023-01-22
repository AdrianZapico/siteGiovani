import React from 'react'
import { Container, Content } from './style'
import {  FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <a href="https://www.facebook.com/itaborahyink" target="_blank">
        <ItemContact 
          IconFa={FaFacebook} 
          LinkContact="https://www.facebook.com/itaborahyink" 
        />
        </a>
        <a href="https://www.instagram.com/itaborahy_ink/" target="_blank">
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/itaborahy_ink/" 
        />
        </a>
        <a href="mailto:joeytafolla123@gmail.com" target="_blank">
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="itaboaryink@gmail.com" 
        />
        </a>
      </Content>
    </Container>
  )
}
