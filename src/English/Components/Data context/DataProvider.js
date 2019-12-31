import React from 'react';
import DataContext from './DataContext'


export default function DataProvider(props) {
  return (
  <DataContext.Provider value ={{name:'ali'}}>
        {props.children}
  </DataContext.Provider>
  );
}
