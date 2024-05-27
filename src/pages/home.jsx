
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { PhotoLibraryRounded } from '@mui/icons-material';

const animalInfo = [
    {
      name: 'Gatito',
      image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      city: 'Niteroi - RJ',
      age: '3 meses',
      gender: 'Macho',
      personality: ['carinhoso', 'calmo', 'doce', 'dorminhoco']
    },
    {
      name: 'Milka',
      image: 'https://img.olx.com.br/images/96/969360541461174.jpg',
      city: 'Campo Mourao - PR',
      age: '2 meses',
      gender: 'Fêmea',
      personality: ['doida', 'desesperada', 'fofa']
    },
    {
      name: 'Gatita',
      image: 'https://projetocolabora.com.br/wp-content/uploads/2016/01/12606960_1264757983551442_436655516_ne.jpg',
      city: 'Niteroi - RJ',
      age: '3 meses',
      gender: 'Macho',
      personality: ['carinhoso', 'calmo',]
    },
    {
      name: 'Benjamin',
      image: 'https://i.pinimg.com/originals/72/90/32/72903252b69df69eafd15b5372e094c5.jpg',
      city: 'Niteroi',
      age: ' 1 ano',
      gender: 'Macho',
      personality: ['carinhoso', 'calmo', 'doce', 'dorminhoco']
    },
    {
      name: 'Leozito',
      image: 'https://http2.mlstatic.com/D_NQ_NP_681259-MLB72993559953_112023-O.webp',
      city: 'Ariquemes - RO',
      age: '1 ano',
      gender: 'Macho',
      personality: ['carinhoso', 'calmo', 'doce', 'dorminhoco']
    },
    {
      name: 'Biankita',
      image: 'https://http2.mlstatic.com/D_NQ_NP_741076-MLB73810769955_012024-O.webp',
      city: 'São Paulo - SP',
      age: '3 meses',
      gender: 'Macho',
      personality: ['carinhoso', 'calmo', 'doce', 'dorminhoco']
    },
]

const Card = styled.div`
  height: 620px;
  width: 400px;
  background-color: #FFFFFF;
  padding: 24px;
  margin: 0 24px;
  margin-bottom: 60px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  @media (max-width: 480px) {
      height: 480px;
      width: 300px;
    }   
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const AnimalInfo = styled.div`
  margin: 0 24px 24px;
`;

const Name = styled.p`
  font-size: 24px;
  color: #5a5a5a;
  font-weight: bold;
`;
const NameContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 220px;
  border-radius: 200px;  
  border: 5px solid #60C883;
  height: 220px;
  object-fit: cover;
`;

const InfoTitle = styled.p`
  font-weight: bold;
  color: #5a5a5a;
  padding-right: 8px;
  margin: 0;
`;
const InfoData = styled.p`
  margin: 0;
  color: #747474;
`;
const PersonalityTag = styled.div`
  background-color: #FF8B6A;
  margin-right: 8px;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 4px;
  color: #FFFFFF;

  p {
    margin: 0;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
`;

const CheckContainer = styled.div`
  background-color: #60C883;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 60px;
  border-radius: 8px;
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.2);
  svg {
    color: #FFFFFF;
  }
`;

const Photos = styled.div`
  background-color: #84b6f4;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 60px;
  border-radius: 8px;
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.2);
  svg {
    color: #FFFFFF;
  }
`;

const BottomButtons = styled.div`
 margin-top: 44px;
 display: flex;
 justify-content: space-around;
`;

const Title = styled.h2`
  color: #4d4d4d;
`

const TitleContainer = styled.div`
  padding: 44px;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #5a5a5a; 
  margin-bottom: 40px;
`;

function onClickPhotos () {
  
}

export default function Home() {
    return (
        <>
          <TitleContainer>
            <Title>Animais Disponíveis</Title>
            Dê o match com seu novo amiguinho!
          </TitleContainer>
              
            <Container>
            
              {animalInfo.map((animal) => (
                <Card>
                  <AnimalInfo>
                  <ImageContainer>
                    <Image src={animal.image}  />
                  </ImageContainer>
                  <NameContainer>
                  <Name>{animal.name}</Name>
                  </NameContainer>
                  <InfoContainer>
                    <InfoTitle>Cidade:</InfoTitle>
                    <InfoData>{animal.city}</InfoData>
                  </InfoContainer>
                  <InfoContainer>
                    <InfoTitle>Idade:</InfoTitle>
                    <InfoData>{animal.age}</InfoData>
                  </InfoContainer>
                  <InfoContainer>
                    <InfoTitle>Sexo:</InfoTitle>
                    <InfoData>{animal.gender}</InfoData>
                  </InfoContainer>
                  <InfoContainer>
                  <InfoTitle>Personalidade:</InfoTitle>
                    {/* <InfoContainer> */}
                      {animal.personality.map((tag) => <PersonalityTag><p>{tag}</p></PersonalityTag>)}
                    {/* </InfoContainer> */}
                  </InfoContainer>
                  <BottomButtons>
                  <Link to="/adopt-confirmation">
                      <CheckContainer>
                        <CheckRoundedIcon fontSize='large'/>
                      </CheckContainer>
                  </Link>
                    <Photos onClick={() => onClickPhotos()}>
                      <PhotoLibraryRounded fontSize='large'/>
                    </Photos>
                    </BottomButtons>
                  </AnimalInfo>
              </Card>
              )
            )}
            
            </Container>
        </>

    );
}
