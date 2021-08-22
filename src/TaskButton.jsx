export const TaskButton = (props) => {
    return (
        <button onClick={props.onClick} className={`inline-block px-2 py-1 rounded-md transform transition bg-brand hover:-translate-y-px focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-xs text-white shadow-lg sm:text-xs bg-${props.color}-400 mr-2 mt-3`}>{props.text}</button>
    )
}