import React, {Component} from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';


class Table extends Component{ 

  render(){
    return(
      <table>
        
        <TableHeader />
        <TableBody characters={this.props.characters} removeCharacter={this.props.removeCharacter}/>       

      </table>
    );
  }

}

export default Table;