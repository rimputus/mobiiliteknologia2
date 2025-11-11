import React, { useState } from 'react';
import { Modal, Text, Pressable, View } from 'react-native';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal visible={visible} transparent onRequestClose={() => setVisible(false)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00000055' }}>
          <Pressable onPress={() => setVisible(false)}>
            <Text style={{ color: 'white', backgroundColor: 'black', padding: 20 }}>tää se on</Text>
          </Pressable>
        </View>
      </Modal>

      <Pressable onPress={() => setVisible(true)}>
        <Text style={{ color: 'white' }}>näytä modal</Text>
      </Pressable>
    </View>
  );
};

export default App;
