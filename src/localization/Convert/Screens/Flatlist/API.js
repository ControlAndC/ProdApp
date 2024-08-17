import React from 'react';

export const getUsers = async (appState, onError, onReceived) => {
  try {
    appState.updateAppState({ loader: true });
    const response = await fetch('https://dummyjson.com/users');
    const json = await response.json();
    appState.updateAppState({ data: json.users });
    onReceived(json.users);
    return json.movies;
  } catch (error) {
    // console.error(error);
    onError('Error while fetching movies records!!');
  }
};
