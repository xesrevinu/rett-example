import React, { useEffect } from "react"

// const Service1Info = Service1.getComponent()
// const Service1Page = Service1.asComponent()

// const F = import("service1/routes")

F.then((x) => {
  console.log(x.default())
})

export default () => {
  useEffect(() => {
    // console.log("Service1", Service1)

    console.log("--------------", React.version)

    async function test() {
      // console.log(await Service1Info)
    }

    test()
  }, [])

  return (
    <div>
      Rett
      <div>{/* <Service1Page /> */}</div>
    </div>
  )
}
