import { Badge, ListGroupItem } from "react-bootstrap";

export default function TodoItem({ todo, markAsDone }) {

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
                </>
            )}

        </ListGroupItem>
    );
};
