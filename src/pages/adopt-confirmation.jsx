
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import adoptImage from '../images/adopt-confirmation.png';

const Card = styled.div`
  background-color: #FFFFFF;
  padding: 0 24px 24px 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  display:flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    height: 480px;
    width: 288px;
  }  
`

const Image = styled.img`
  object-fit: cover;
  padding-left: 24px;
  padding-top: 24px;
  @media (max-width: 768px) {
    width: 264px;
  }  
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-left: 24px;
  max-width: 400px;
  text-align: center;
  text-decoration: none;
  @media (max-width: 768px) {
    max-width: 260px;
  }  
  a {
    text-decoration: none;
  }
`;

const Title = styled.div`
  padding-bottom: 24px;
  font-size: 28px;
`;

const Text = styled.div`
  padding-bottom: 24px; 
  font-size: 16px;
`;

const Button = styled.button`
  padding-bottom: 24px; 
  font-size: 16px;
  all: unset;
  background-color: #FF8B6A;
  width: 160px;
  height: 45px;
  border-radius: 18px;
  color: #FFFFFF;
  font-weight: bold;
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.2);
`;

export default function AdoptConfirmation() {
    return (
        <Container>
        <Card>
            <Image src={adoptImage} />
            <DescriptionContainer>
                <Title>Parabéns</Title>
                <Text>Você está a poucos passos de adotar seu amiguinho!</Text>
                <Text> Aguarde até o dono do animal entrar em contato.</Text>
                <Link to="/animals"><Button>Confirmar</Button></Link>
            </DescriptionContainer>
        </Card>
        </Container>

    );
}
