import React from 'react'
import Person from './Person'
function NameList() {

    const names = ["Sania", "Virat", "Merry"]
    const nameList = names.map(nameUsed => <h3>{nameUsed}</h3>)

    const persons = [
        {
            houseNo: 101,
            age: 20,
            skill: "React"
        },
        {
            houseNo: 102,
            age: 21,
            skill: "Java"
        },
        {
            houseNo: 103,
            age: 22,
            skill: "AI"
        }
    ]

    // const personList = persons.map(personThings => <Person personThings={personThings}></Person>)
    const personList = persons.map(personThings => <Person key= "unique" personThings={personThings}></Person>)
    
  return (
    // <div>
    //     <h3>{names[0]}</h3>
    //     <h3>{names[1]}</h3>
    //     <h3>{names[2]}</h3>
    // </div>
    <div>
        <div>
            {
                personList
            }
        </div>
        {/* const personList = persons.map(personThings2 => <Person personThin) */}
        <div>
        {/* map method is JS code, that needs to be evaulated so we'll use curly braces for it. */}
        {
            nameList
        }
        </div>
    </div>
    

  )
}

export default NameList