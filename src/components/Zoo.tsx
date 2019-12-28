import React from "react"

type iAnimal = Animal & Partial<Eagle> & Partial<Shark>

interface Animal {
  name: string
}
interface Eagle {
  typeIsEagle?: boolean
  talonSize: number
}
interface Shark {
  typeIsShark?: boolean
  teethLength: number
}
type InputShark = Shark & Animal
type InputEagle = Eagle & Animal
function createShark(data: InputShark): iAnimal {
  return { ...data, typeIsShark: true }
}

function createEagle(data: InputEagle): iAnimal {
  return { ...data, typeIsEagle: true }
}

function isEagle(arg: iAnimal): boolean {
  return "typeIsEagle" in arg
}

function isShark(arg: iAnimal): boolean {
  return "typeIsShark" in arg
}

const Zoo = () => {
  const greatWhiteShark: iAnimal = createShark({
    name: "Great White Shark",
    teethLength: 10,
  })

  const BaldEagle: iAnimal = createEagle({
    name: "Bald Eagle",
    talonSize: 3,
  })

  return (
    <>
      <DisplayAnimal animal={greatWhiteShark} />
      <DisplayAnimal animal={BaldEagle} />
    </>
  )
}

const DisplayAnimal = (props: { animal: iAnimal }) => (
  <>
    <h1>Name: {props.animal.name}</h1>
    {isEagle(props.animal) && <p>TalonSize: {props.animal.talonSize}</p>}
    {isShark(props.animal) && <p>TeethLength: {props.animal.teethLength}</p>}
  </>
)

export default Zoo
