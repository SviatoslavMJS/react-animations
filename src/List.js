import { CSSTransition, TransitionGroup } from "react-transition-group"


export const List = ({ items, onRemove }) => {
    return (
        <TransitionGroup
            component={"ul"}
        >
            {items.map(item => (
                <CSSTransition
                    key={item.id}
                    classNames={"os"}
                    timeout={2000}
                >
                    <li onClick={() => onRemove(item.id)}>{item.text}</li>
                </CSSTransition>
              ))
            }
        </TransitionGroup>
    )
}