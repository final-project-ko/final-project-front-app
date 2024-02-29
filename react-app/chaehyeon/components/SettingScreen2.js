import { Text, View } from "react-native";
import KoreaNewsNavigator from "./koreanewscategory/KoreaNewsNavigator";
import GlobalNewsNavigator from "./globalnewscategory/GlobalNewsNavigator";
const SettingScreen2 = () =>{
    return (
        <View>
          <KoreaNewsNavigator />
          <GlobalNewsNavigator />

          {/*<Text>addddddddddds</Text>*/}
          {/* SettingScreen2의 내용이 여기에 들어갑니다. */}
        </View>
      );
}

export default SettingScreen2;