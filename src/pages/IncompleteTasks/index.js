import ListIncomplete from '../../components/ListIncomplete';

function IncompleteTasks() {
  return (
    <section className="container my-5 text-center">
    <h1 className="mb-4">Tarefas Incompletas</h1>
    <ListIncomplete />
    </section>
  );
}

export default IncompleteTasks;