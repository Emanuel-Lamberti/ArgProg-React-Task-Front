import  { BsBookmarkCheck, BsCheck, BsGear, BsPencilSquare } from "react-icons/bs";

interface CategoriasSelectorProps {
    onSelectedCategory: (categoria: string) => void;
}

const CategoriasSelector: React.FC<CategoriasSelectorProps> = ({ onSelectedCategory }) => {
    const categorias = [
        { nombre: 'PORHACER', icono: <BsCheck />},
        { nombre: 'ENPRODUCCION', icono: <BsGear />},
        { nombre: 'PORTESTEAR', icono: <BsPencilSquare />},
        { nombre: 'COMPLETADA', icono: <BsBookmarkCheck />},
    ];

  return (
    <section className="container mt-3">
        <p className="fs-3"> Seleccione una categoria: </p>
        <div className="row gap-4">
            {categorias.map((categoria, index)=> (
                <div className="col d-flex justify-content-center p-0" key={index}>
                    <button onClick={() => onSelectedCategory(categoria.nombre)}
                    className="btn btn-outline-primary border-1 d-flex gap-1 align-items-center rounded p-2 text-decoration-none" style={{cursor: 'pointer'}}>{categoria.icono} {categoria.nombre}</button>
                </div>
            ))}
        </div>
    </section>
  )
}

export default CategoriasSelector
