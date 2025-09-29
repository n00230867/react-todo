import { Badge, ListGroupItem } from "react-bootstrap";

export default function TodoItem({ todo, markAsDone, deleteTodo }) {

    return (
        <ListGroupItem>
            {(todo.done) ? (
                <>
                    <span className="done">{todo.text}</span>
                    <span className="float-end">&#128077;</span>
                </>
            ) : (
                <>
                    {todo.text}
                    <Badge pill bg="success" className="float-end pe-auto" onClick={() => {markAsDone(todo.id)}}>&#10003;</Badge>

                    <Badge pill bg="danger" className="float-end me-2 pe-auto" onClick={() => {deleteTodo(todo.id)}}>&#10005;</Badge>
                </>
            )}

        </ListGroupItem>
    );
};
