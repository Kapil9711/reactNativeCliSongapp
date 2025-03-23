import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
  Pressable,
  StatusBar,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.75; // 75% of screen width
import Icon from 'react-native-vector-icons/AntDesign';

<Icon name="home" size={30} color="#007bff" />;

const CustomDrawer = () => {
  const drawerAnimation = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
    Animated.timing(drawerAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerAnimation, {
      toValue: -DRAWER_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsDrawerOpen(false)); // Set state after animation ends
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} hidden />
      {/* Button to Open Drawer */}
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderRadius: 100,
          padding: 4,
          marginLeft: 10,
          position: 'absolute',
          top: 25,
        }}
        onPress={openDrawer}>
        {/* bars */}

        <Icon name="bars" size={40} />
      </TouchableOpacity>

      {/* Full-Screen Overlay (Closes Drawer When Clicked Outside) */}
      {isDrawerOpen && (
        <Pressable style={styles.overlay} onPress={closeDrawer} />
      )}

      {/* Drawer */}
      <Animated.View
        style={[styles.drawer, {transform: [{translateX: drawerAnimation}]}]}>
        <TouchableOpacity onPress={closeDrawer} style={styles.closeButton}>
          <Text style={styles.buttonText}>✖ Close</Text>
        </TouchableOpacity>

        {/* Drawer Content */}
        <View style={styles.drawerContent}>
          <Text style={styles.drawerItem}>🏠 Home</Text>
          <Text style={styles.drawerItem}>👤 Profile</Text>
          <Text style={styles.drawerItem}>⚙️ Settings</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'relative',
    top: -50,
  },
  openButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginLeft: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay when open
    zIndex: 1,
  },
  drawer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: DRAWER_WIDTH,
    height: height, // Full height
    backgroundColor: '#fff',
    padding: 20,
    elevation: 10,
    zIndex: 2, // Ensures it appears on top
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  drawerContent: {
    marginTop: 20,
  },
  drawerItem: {
    fontSize: 18,
    paddingVertical: 10,
  },
});

export default CustomDrawer;
