export function Cancel(props) {
    return (
        <button onClick={props.onClick} type="button" className="btn btn-outline-primary">
            {props.children}
        </button>
    )
}