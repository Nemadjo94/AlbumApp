import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

export default function App() {
  return (
    <>
      <Header headerText={'Albums'} />
      <AlbumList />
    </>
  );
}

