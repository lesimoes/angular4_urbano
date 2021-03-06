import { Oferta } from './shared/oferta.model';

export class OfertasService {

  private ofertas: Array<Oferta> = [
	{
		id: 1,
		categoria: "restaurante",
		titulo: "Super Burger",
		descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
		anunciante: "Original Burger",
		valor: 29.90,
		destaque: true,
		imagens: [
			{url: "/assets/ofertas/1/img1.jpg"},
			{url: "/assets/ofertas/1/img2.jpg"},
			{url: "/assets/ofertas/1/img3.jpg"},
			{url: "/assets/ofertas/1/img4.jpg"}
		]
	},
	{
		id: 2,
		categoria: "restaurante",
		titulo: "Cozinha Mexicana",
		descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
		anunciante: "Mexicana",
		valor: 32.90,
		destaque: true,
		imagens: [
			{url: "/assets/ofertas/2/img1.jpg"},
			{url: "/assets/ofertas/2/img2.jpg"},
			{url: "/assets/ofertas/2/img3.jpg"},
			{url: "/assets/ofertas/2/img4.jpg"}
		]

	},
	{
		id: 4,
		categoria: "diversao",
		titulo: "Estância das águas",
		descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
		anunciante: "Estância das águas",
		valor: 31.90,
		destaque: true,
		imagens: [
			{url: "/assets/ofertas/3/img1.jpg"},
			{url: "/assets/ofertas/3/img2.jpg"},
			{url: "/assets/ofertas/3/img3.jpg"},
			{url: "/assets/ofertas/3/img4.jpg"},
			{url: "/assets/ofertas/3/img5.jpg"},
			{url: "/assets/ofertas/3/img6.jpg"}
		]
	}
]


  public getOfertas(): Array<Oferta> {
    return this.ofertas;
  }


  public getOfertasPromise(): Promise<Oferta[]>{
    return new Promise((resolve, reject) => {
      let control = true;
      if(control){
        setTimeout(() => {resolve(this.ofertas)}, 3000)
      }
      else
        reject({cod_erro: 404, mensagem: 'Erro ao efetuar a requisição!'});
    })
    .then((ofertas: Oferta[]) => {
        console.log('Primeiro then')
        ofertas.filter((oferta) => oferta.categoria == 'restaurante')
      return ofertas;
    })
    .then( (ofertas: Oferta[]) => {
      console.log('Segundo then')
      return new Promise((resolve2, reject2) => {
        setTimeout(() => {resolve2(ofertas)}, 3000)
      });
    })
    .then( (ofertas: Oferta[]) => {
      console.log('Terceiro then')
      return ofertas;
    })
  }

}
