import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
    console.log('Data stored successfully!');
  } catch (e) {
    return false;
    console.error('Failed to save data', e);
  }
};

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value); // Convert back to object
    }
  } catch (e) {
    console.error('Failed to load data', e);
    return null;
  }
};

const removeData = async (key: any) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Data removed successfully!');
  } catch (e) {
    console.error('Failed to remove data', e);
  }
};

const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Storage cleared successfully!');
  } catch (e) {
    console.error('Failed to clear storage', e);
  }
};

const checkKeyExists = async (key: any) => {
  const value = await AsyncStorage.getItem(key);
  return value !== null;
};

export const asyncHelper = {
  storeData,
  getData,
  removeData,
  clearStorage,
  checkKeyExists,
};
