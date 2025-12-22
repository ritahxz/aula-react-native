import AsyncStorage from '@react-native-async-storage/async-storage';

interface IStoredData {
  value: string;
  key: string;
}
export const storeData = async ({ value, key }: IStoredData) => {
  try {
    const jsonValue = JSON.stringify(value);
    AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error ao salvar dados', e);
  }
};

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
     console.error('Error ao salvar dados', e);
  }
};
