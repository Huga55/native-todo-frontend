import React from 'react';
import ModalState from './src/context/modal/ModalState';
import SectionState from './src/context/section/SectionState';
import UserState from './src/context/user/UserState';
import MainLayout from './src/layouts/MainLayout';

export default function App() {
  return (
    <UserState>
      <SectionState>
        <ModalState>
          <MainLayout />
        </ModalState>
      </SectionState>
    </UserState>
  );
}
