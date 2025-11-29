import { TextInput, TextInputProps } from 'react-native';
import { View } from 'react-native';

export function InputCustomizado({ ...rest }: TextInputProps) {
  return (
    <View className="w-full rounded-2xl border-2 border-gray-500">
      <TextInput {...rest} />
    </View>
  );
}
