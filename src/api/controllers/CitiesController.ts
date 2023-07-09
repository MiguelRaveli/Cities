import { Request, Response } from "express";
const cities = [
  {
    location: "São Paulo",
    image:
      "https://viagemeturismo.abril.com.br/wp-content/uploads/2017/12/istock-842960000.jpg",
  },
  {
    location: "Rio de Janeiro",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/1200px-Cidade_Maravilhosa.jpg",
  },
  {
    location: "Maranhão",
    image:
      "https://www.brasildefatorn.com.br/images/uploads/maranhao-frente-para-o-mar.jpg",
  },
  {
    location: "Brasilia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Planalto_Central_%28cropped%29.jpg",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(cities);
  },
};
