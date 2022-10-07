import ListCompleted from '../../components/ListCompleted';

function CompletedTasks() {
  return (
    <section className="container my-5 text-center">
    <h1 className="mb-4">Tarefas Completas</h1>
    <ListCompleted />
    </section>
  );
}

export default CompletedTasks;