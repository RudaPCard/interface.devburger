import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { Banner, Container, Content } from "./styles";

export function Home() {
	return (
		<main>
			<Banner>
				<h1>Bem-Vindo(a)!</h1>
			</Banner>

            <Container>
                <Content>
                    <CategoriesCarousel />
                    <div>Carrossel de Produtos</div>
                </Content>
            </Container>
		</main>
	);
}
