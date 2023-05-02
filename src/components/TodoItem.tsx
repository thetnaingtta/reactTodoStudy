import classes from './TodoItem.module.css'

const TodoItem: React.FC<{text: string, RemoveTodo: ()=> void}> = (props) => {
    
    return (
        <li className={classes.item}>
        <span className={classes.deleteIcon} onClick={props.RemoveTodo} >
            X
          </span>
          {props.text}          
        </li>
      );
}

export default TodoItem;