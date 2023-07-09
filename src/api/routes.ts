import { Router } from "express";
import WeatherController from "./controllers/CitiesController";
const routes = Router()


routes.get("/cities", WeatherController.index);


  export default routes;