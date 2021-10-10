import { useState } from "react";
import { Transition, CSSTransition } from "react-transition-group";
import { List } from "./List";


function App() {
  const [toggle, setToggle] = useState(true)
  const [toggle2, setToggle2] = useState(true)
  const [items, setItems] = useState([
    { id: 1, text: "Title 1" },
    { id: 2, text: "Title 2" },
    { id: 3, text: "Title 3" },
  ])

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const newTitle = () => {
    setItems(items.concat({
      id: Date.now(),
      text: prompt("Enter title")
    }))
  }

  return (
    <div className="container">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <button onClick={() => setToggle2(!toggle2)}>Toggle2</button>
      <button onClick={() => newTitle()}>Add title</button>
      <hr />
      <div className="blocks">
        <Transition
          in={toggle}
          timeout={{
            enter: 2000,
            exit: 2000
          }}
          mountOnEnter
          unmountOnExit
        >
          {state => <div className={`square blue ${state}`}>{state}</div>}
        </Transition>

        <CSSTransition
          in={toggle2}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          classNames={"os"}
          onEnter={() => console.log("onEnter")}
          onEntering={() => console.log("onEntering")}
          onEntered={() => console.log("onEntered")}
          onExit={() => console.log("onExit")}
          onExiting={() => console.log("onExiting")}
          onExited={() => console.log("onExited")}
        >
          <div className={`square orange`}>{toggle2.toString()}</div>
        </CSSTransition>

        <List items={items} removeItem={removeItem} />

      </div>
    </div>
  );
}

export default App;
