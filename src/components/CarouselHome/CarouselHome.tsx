import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <>
      <Carousel>

      <Carousel.Item>
        <img 
        className='d-block w-100' 
        style={{maxHeight: "700px", objectFit: 'cover'}}
        src="/assets/images/laptop-typing-time.jpg" alt="slide1" />
        <Carousel.Caption>
          <h3>Desarrollo en Argentina</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img 
        className='d-block w-100' 
        style={{maxHeight: "700px", objectFit: 'cover'}}
        src="/assets/images/pexels-christina-morillo.jpg" alt="slide2" />
        <Carousel.Caption>
          <h3>Revisa nuestras tareas</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img 
        className='d-block w-100' 
        style={{maxHeight: "700px", objectFit: 'cover'}}
        src="/assets/images/pexels-nemuel-sereti.jpg" alt="slide3" />
        <Carousel.Caption>
          <h3>Código nativo en React</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </>
  )
}

export default CarouselHome
