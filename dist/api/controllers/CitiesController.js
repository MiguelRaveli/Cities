"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cities = [
    {
        location: "São Paulo",
        image: "https://viagemeturismo.abril.com.br/wp-content/uploads/2017/12/istock-842960000.jpg",
    },
    {
        location: "Rio de Janeiro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/1200px-Cidade_Maravilhosa.jpg",
    },
    {
        location: "Maranhão",
        image: "https://www.brasildefatorn.com.br/images/uploads/maranhao-frente-para-o-mar.jpg",
    },
    {
        location: "Brasilia",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Planalto_Central_%28cropped%29.jpg",
    },
];
exports.default = {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json(cities);
        });
    },
};
