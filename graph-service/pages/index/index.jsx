import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "./index.scss"

export const IndexPage = () => {
  const [count, setCount] = useState(101)

  useEffect(() => {
    console.log(process.env.SERVICE_NAME, "entry")

    return () => {
      console.log(process.env.SERVICE_NAME, "leave")
    }
  }, [])

  return (
    <div className={styles.a}>
      count: <span>{count}</span>
      <button className={styles.c} onClick={() => setCount(count + 10)}>
        {count} service1 add
      </button>
      <Link to="/welcome">go welcome page</Link>
    </div>
  )
}

export default IndexPage
