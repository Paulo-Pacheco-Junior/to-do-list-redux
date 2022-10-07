import AddTask from '../../components/AddTask';
import ListTasks from '../../components/ListTasks';

function Home() {
  return (
    <section className="container my-5 text-center">
    <h1 className="mb-4">Adicione uma Tarefa!</h1>
    <AddTask />
    <ListTasks />
    </section>
  );
}

export default Home;