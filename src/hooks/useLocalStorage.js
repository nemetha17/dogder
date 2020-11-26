import { useEffect, useState } from "react"

const useLocalStorage = (key, initialValue) => {
  const [values, setValue] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || initialValue
  )

  useEffect(() => {
    if (values) {
      window.localStorage.setItem(key, JSON.stringify(values))
    }
  }, [values, key])

  const deleteValue = (i) => {
    setValue(values.filter((s)=>s.message!== i.message))
  }

  const clearLocalStorage =()=>{
    setValue([])

  }
  return { values, setValue, deleteValue, clearLocalStorage }
}

export default useLocalStorage
