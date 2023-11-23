import { useEffect, useState } from "react";
import { Task } from "../../types/Task";
import CategoriasSelector from "../CategoriasSelector/CategoriasSelector";
import CategoriasTareas from "../CategoriasTareas/CategoriasTareas";
import { TaskService } from "../../Services/TaskService";

const Categoria = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    useEffect(()=>{
        const fetchTasks = async () => {
            const tasksData = await TaskService.getAllTasks();
            setTasks(tasksData);
        }
        fetchTasks();
    }, []);

    const filteredTasks = selectedCategory
    ? tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase()): tasks;

  return (
    <div className="container mt-5">
        <CategoriasSelector onSelectedCategory={setSelectedCategory}/>
        <CategoriasTareas tasks={filteredTasks}/>
    </div>
  )
}

export default Categoria
