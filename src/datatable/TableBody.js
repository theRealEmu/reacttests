import React from 'react';



const TableBody = (props) => {

  const { characters, removeCharacter } = props;

  const rows = characters.map( (character, index) => {
    return (
      <tr key={index}>
        <td>{character.name}</td>
        <td>{character.email}</td>
        <td> 
          <button onClick={removeCharacter.bind(this,index)}>X</button>
        </td>
      </tr>
    );
  })
  return(
    <tbody>
      {rows}
    </tbody>
  );
}

export default TableBody;