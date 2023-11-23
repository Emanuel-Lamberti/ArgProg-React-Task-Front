import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Basket, Person } from "react-bootstrap-icons"
import { Task } from "../../types/Task";
import { TaskService } from "../../Services/TaskService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import ModalAgregarTarea from "../ModalAgregarTarea/ModalAgregarTarea";
import "./NavBar.css";


const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const createTask = async (newTask: Task) => {
    try{
      const result = await TaskService.createTask(newTask);
      console.log("Nueva tarea agregada:", result.id);
      navigate(`/detalle/${result.id}`);
    } catch (error) {
      toast.error("Error al crear la tarea", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.error("Error al crear la tarea:", error);
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="container">
        <Navbar.Brand href="#home" className="brand">Tasks.org</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>

            <NavDropdown title="Tareas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Por hacer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                En producción
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Por testear</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Completada
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link onClick={handleShowModal}>Agregar tarea</Nav.Link>
          </Nav>

          <Nav className="d-none d-md-flex ms-auto">
            <Nav.Link href="#carrito">
                <Basket />
            </Nav.Link>
            <Nav.Link href="#usuario">
                <Person />
            </Nav.Link>
          </Nav>

        <div className="d-md-none">
            <ul className="navbar-nav me-auto-mb-2 mb-md-0">
                <li className="nav-item">
                    <a className="nav-link" href="#ticket">Ticket</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#perfil">Perfil</a>
                </li>
            </ul>
        </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>

    <ModalAgregarTarea showModal={showModal} handleClose={handleCloseModal} createTask={createTask} />
    </div>
  )
}

export default NavBar
