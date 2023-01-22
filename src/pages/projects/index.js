
import { Container, Content,  DivImage, DivBox,  } from './style'
import data from '../../database/image.json'
import Image from 'next/image'

export default function Projects(props) {

   
    return (
        <Container>
            <Content>
                
                <DivImage>
                {data.map((item, index) => (
                    
                    <DivBox>
                    <Image
                    style={{borderRadius:'10px',
                    margin:'7px',
                    }}
                    alt='image'
                   
                    width={300}
                    height={300}
                    src={require(`../../../public/arts/${item.path}`)}
                    />
                    </DivBox>
                ))}
                </DivImage>
                

            </Content>
        </Container>
    )
}