import { NativeModules } from 'react-native';

type QualarooReactNativeMobileSdkType = {
  multiply(a: number, b: number): Promise<number>;
};

const { QualarooReactNativeMobileSdk } = NativeModules;

export default QualarooReactNativeMobileSdk as QualarooReactNativeMobileSdkType;
