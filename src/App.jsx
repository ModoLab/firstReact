const title="Yakafokon"
const style = {color: 'red' , backgroundColor : "blue"}

const showTitle = true

const todos = [
  "présenter React",
  "presenter jsx",
  "crer un composant"
]

function App() {

  const handleClick = (e) => {
    e.preventDefault()
    alert("j'ai cliqué")
  }

  return <div>


    <FormulaireControle />
    <FormulaireNonControle />




    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Personnage />
    <Compte />
    <Head />
    <TitleBis />
    <TitleColor color="green"/>

    {showTitle && <h1 id="title" className="titleclass" style={style}>Bonjour les gens {title}</h1>}

    {showTitle ?
      <h1 id="title" className="titleclass" style={style}>Bonjour les gens {title}</h1> :
      <p>Echec</p>
    }

    <h2 id="title" className="titleclass" style={style}>Bonjour les gens {title}</h2>

    <p className="soustitre" style={{color: "darkBlue"}}>Je suis un sous titre</p>

    <h4 onClick={handleClick}>Cliquez ici</h4>

    <h4 style={{color: 'green'}} onClick={() => alert ('Salut')}>Cliquez ici</h4>

    <input type="text" />

    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>

    </div>

}

function Head() {
  return <>
  <p>----------------------------------------------------</p>

  </>
}



import {useState} from 'react';

function Compte() {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return <>
    <p>Compteur : {count}</p>
    <button onClick={increment}>Incrémenter</button>
  </>
}



function Personnage() {

    const [person, setPerson] = useState({
      firstName: "John",
      lastName: "Doe",
      age: 18
    })

    const increment = () => {
      setPerson({...person, age: person.age + 1})
    }

    return <>
    <p>age de {person.firstName} {person.lastName} : {person.age}</p>
    <button onClick={increment}>Gagner une année</button>
    </>

}











function FormulaireControle() {

    const [firstname, setFirstname] = useState('John Doe')

    const handleChange = (e) => {
      setFirstname(e.target.value)
    }

    const reset = () => {
      setFirstname('')
    }


    return <form>
      <input type="text" name="firstname" value={firstname} onChange={handleChange}/>
      <button onClick={reset} type="button">Reset</button>
    </form>
}


function FormulaireNonControle() {

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(new FormData(e.target))
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" name="firstname" />
    <button>Envoyer</button>
  </form>
}








function TitleBis () {
  return <h1>Bonjour les sages</h1>
}

function TitleColor ({color}) {
  return <h1 style={{color: color}}>Bonjour les sages verts</h1>
}

export default App
