import { Button, ButtonProps , View } from 'react-native';

export function BotaoCustomizado({ ...rest }: ButtonProps) {
  return  (
      <View className="text-4xl: w-full rounded-2xl border-2">
        <Button {...rest} />
      </View>
    );
  }
  