import Hero from '../Hero/Hero'
import Cards from "../Cards/Cards"
import tendencias from "../assets/data"
import nuevacoleccion from "../assets/new_collections"

function Tienda() {
  return (
    <>
      <Hero />
      <Cards data={tendencias} titulo="Tendencias" />
      <Cards data={nuevacoleccion} titulo="Nueva coleccion" />
    </>
  );
}

export default Tienda;