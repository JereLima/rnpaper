import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const HeaderComponent = () => (
 <Appbar style={styles.bottom}>
     <Appbar.BackAction  />
     <Appbar.Content style={{alignItems: 'flex-start'}} title="Nome da Tela" subtitle={'Subtitle'} />
  </Appbar>
 );

export default HeaderComponent

const styles = StyleSheet.create({
  bottom: {
    left: 0,
    right: 0,
    top: 0,
    position: 'relative',
  },
});