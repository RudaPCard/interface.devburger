import Logo from "../../assets/logo.svg";
import { Button } from '../../components/Button';
import {	
	Container,
	Form,
	InputContainer,
	LeftContainer,	
	RightContainer,
	Title,
    
} from "./styles";



export function Login() {
	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="logo-devburger" />
			</LeftContainer>

			<RightContainer>
				<Title>
					<h2>
						Olá, seja bem vindo ao <span>Dev Burger!</span>
						<br />
						Acesse com seu <span> Login e senha.</span>
					</h2>
				</Title>
				<Form>
					<InputContainer>
						<label>Email</label>
						<input type="email" />
					</InputContainer>

					<InputContainer>
						<label>Senha</label>
						<input type="password" />
					</InputContainer>

					<Button>Entrar</Button>
				</Form>
				<p>
					Não possui conta? <a>Clique aqui.</a>
				</p>
			</RightContainer>
		</Container>
	);
}
