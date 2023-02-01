import { useReducer } from 'react';
import { v4 as uuid4 } from 'uuid';

import { EntriesContext } from './';
import { entriesReducer } from './entriesReducer';
import { Entry } from '../../interfaces';

export interface EntriesState {
  entries: Entry[];
}

const initialState: EntriesState = {
  entries: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const EntriesProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, initialState);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuid4(),
      description,
      createdAt: Date.now(),
      status: 'pending',
    };

    dispatch({
      type: '[Entry] Add Entry',
      payload: newEntry,
    });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
