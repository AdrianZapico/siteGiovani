import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

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
        <Img src="/images/logo.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
