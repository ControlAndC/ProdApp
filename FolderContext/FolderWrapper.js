import React, { createContext, useState } from 'react';

export const FolderContext = createContext();

export function FolderWrapper({ children }) {
  const [folderData, setFolderData] = useState({
    folderName: 'Encrypted',
    folderType: 'randon',
  });

  return (
    <FolderContext.Provider
      value={{
        folderData,
        setFolderData,
      }}
    >
      {children}
    </FolderContext.Provider>
  );
}
