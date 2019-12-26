import React from 'react'

const AddContact = ({
  addNewContact, newName, newNumber,
  handleNameInputChange, handleNumberInputChange
}) => {
  return (
    <section>
      <h1>Add new contact</h1>
      <form onSubmit={addNewContact}>
      <div>
        name: &nbsp;
        <input 
          value={newName} onChange={handleNameInputChange}
        />
      </div>
      <div>
        number: &nbsp;
        <input 
          value={newNumber} onChange={handleNumberInputChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    </section>
  )
}

export default AddContact