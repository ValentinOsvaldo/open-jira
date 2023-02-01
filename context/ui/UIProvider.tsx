import { useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
}

const initialState: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UIProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const openSidebar = () =>
    dispatch({
      type: 'UI - Open Sidebar',
    });

  const closeSidebar = () =>
    dispatch({
      type: 'UI - Close Sidebar',
    });

  const setIsAddingEntry = (state: boolean) => {
    dispatch({
      type: 'UI - Adding State',
      payload: state,
    });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        setIsAddingEntry
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
