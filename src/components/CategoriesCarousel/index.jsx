import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { api } from "../../services/api";
import { Container } from "../../containers/Home/styles";

export function CategoriesCarousel() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		async function LoadCategories() {
			const { data } = await api.get("/categories");

			setCategories(data);
			console.log(data);
		}

		LoadCategories();
	}, []);

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1280 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1280, min: 690 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 690, min: 0 },
			items: 2,
		},
	};

	return (
		<Container>
			<Title>Categorias</Title>

			<Carousel
				responsive={responsive}
				Infinity={true}
				partialVisible={false}
				itemClass="carousel-item"
			>
				<ContainerItems>
                    
                </ContainerItems>
			</Carousel>
		</Container>
	);
}
