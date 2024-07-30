import { useRef } from "react"
import "./styles.css"
import { useToast } from "./useToast"

export default function App() {
  const { addToast, removeToast } = useToast()

  const inputRef = useRef(null)
  const toastIdRef = useRef(null)

  function createToast() {
    if (inputRef.current == null || inputRef.current.value == "") return

    toastIdRef.current = addToast(inputRef.current.value)
  }
  return (
    <div className={"form"}>
      <input type="text" ref={inputRef} />
      <button onClick={createToast} >Add Toast</button>
      <button onClick={() => toastIdRef.current != null && removeToast(toastIdRef.current)}>Remove Last Toast</button>
    </div>
  )
}
