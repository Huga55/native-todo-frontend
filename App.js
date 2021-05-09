import React from 'react';
import AppState from './src/context/app/AppState';
import ModalState from './src/context/modal/ModalState';
import SectionState from './src/context/section/SectionState';
import UserState from './src/context/user/UserState';
import MainLayout from './src/layouts/MainLayout';
import { registerRootComponent } from 'expo';


function App() {
  return (
    <AppState>
      <UserState>
        <SectionState>
          <ModalState>
            <MainLayout />
          </ModalState>
        </SectionState>
      </UserState>
    </AppState>
  );
}

export default registerRootComponent(App);