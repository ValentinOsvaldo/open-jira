import { createContext } from 'react';

interface ContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  setIsAddingEntry: (state: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
