import React from 'react'
import { Container, Content } from './style'
import {  FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
     
        <ItemContact 
          IconFa={FaFacebook} 
          LinkContact="https://www.facebook.com/itaborahyink" 
        />
        
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/itaborahy_ink/" 
        />
       
       
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="itaboaryink@gmail.com" 
        />
       
      </Content>
    </Container>
  )
}
