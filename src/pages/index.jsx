import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'
import Image from 'next/image'



export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Giovanni Itaborahy</Name>
        <Function>ARTISTA PLÁSTICO & TATUADOR</Function>
        <Intro>
         
           FANTASY BLACKWORK HORROR  
            BLACKWORK 
          PINTURA EM TECIDO
          
        </Intro>
        <Link href="projects">
          <LinkProjects style={{color:"black"}}>TRABALHOS<FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Image width={400} height={400} src="/images/logo.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
