import { CSSTransition, TransitionGroup } from "react-transition-group"


export const List = ({ items, removeItem }) => {
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
                    <li onClick={() => removeItem(item.id)}>{item.text}</li>
                </CSSTransition>
              ))
            }
        </TransitionGroup>
    )
}