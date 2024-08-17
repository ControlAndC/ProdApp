import React, {
  Component, useEffect, useContext, Suspense,
} from 'react';
import { View, Text } from 'react-native';
import { useTranslation, I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { PostHogProvider } from 'posthog-react-native';
import Router from './router';
import NavState from './AppContext/NavState';
import UserContextState from './UserContext/UserContextState';
import GaurContextState from './GaurCityContext/GaurState';
// import store from './ReduxRedux/Store';
import AppState from './src/localization/Convert/Screens/Flatlist/Context/App';
import ContextApiState from './ContextApi/contextApiState';
import { storeing } from './Store/Index';
import './src/localization/i18n';
import ParkContextData, { ParkContext } from './Contexting/ParkContext';
import PlanetStore from './PlanetStore/Index';
import { FolderWrapper } from './FolderContext/FolderWrapper';
import ContextWrapper from './src/localization/Convert/Screens/Context/ContextWrapper';

function App(props) {
  return (
    <Provider store={PlanetStore}>
      <ContextWrapper>
        <GaurContextState>
          <ParkContextData>
            <FolderWrapper>
              <AppState>
                <ContextApiState>
                  <View style={{ flex: 1 }}>
                    <Router />
                  </View>
                </ContextApiState>
              </AppState>
            </FolderWrapper>
          </ParkContextData>
        </GaurContextState>
      </ContextWrapper>
    </Provider>

  );
}

export default App;
