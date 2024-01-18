const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Services1 from "./screens/Services1";
import Services2 from "./screens/Services2";
import Services3 from "./screens/Services3";
import Services4 from "./screens/Services4";
import Services6 from "./screens/Services6";
import Products from "./screens/Products";
import AboutUs from "./screens/AboutUs";
import Services5 from "./screens/Services5";
import ServicesMain from "./screens/ServicesMain";
import ContactUs from "./screens/ContactUs";
import IPhone14ProMax6 from "./screens/IPhone14ProMax6";
import Sidebarbg from "./screens/Sidebarbg";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity  } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Abril Fatface_regular": require("./assets/fonts/Abril_Fatface_regular.ttf"),
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_extrabold: require("./assets/fonts/Roboto_extrabold.ttf"),
    Montserrat_light: require("./assets/fonts/Montserrat_light.ttf"),
    Montserrat_regular: require("./assets/fonts/Montserrat_regular.ttf"),
    Montserrat_medium: require("./assets/fonts/Montserrat_medium.ttf"),
    Montserrat_semibold: require("./assets/fonts/Montserrat_semibold.ttf"),
    Montserrat_bold: require("./assets/fonts/Montserrat_bold.ttf"),
    Montserrat_extrabold: require("./assets/fonts/Montserrat_extrabold.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
    Inter_extrabold: require("./assets/fonts/Inter_extrabold.ttf"),
    Inter_black: require("./assets/fonts/Inter_black.ttf"),
    Urbanist_semibold: require("./assets/fonts/Urbanist_semibold.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Raleway_extrabold: require("./assets/fonts/Raleway_extrabold.ttf"),
    Satisfy_regular: require("./assets/fonts/Satisfy_regular.ttf"),
    Satisfy_semibold: require("./assets/fonts/Satisfy_semibold.ttf"),
    "Work Sans_bold": require("./assets/fonts/Work_Sans_bold.ttf"),
    Lora_regular: require("./assets/fonts/Lora_regular.ttf"),
    Lora_bold: require("./assets/fonts/Lora_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
    
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Services1"
              component={Services1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Services2"
              component={Services2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Services3"
              component={Services3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Services4"
              component={Services4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Services6"
              component={Services6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Products"
              component={Products}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutUs"
              component={AboutUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Services5"
              component={Services5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ServicesMain"
              component={ServicesMain}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContactUs"
              component={ContactUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax6"
              component={IPhone14ProMax6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sidebarbg"
              component={Sidebarbg}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>

    </>
    
    
  );
  <ScrollView showsVerticalScrollIndicator={false}>
                <View
                style={{
                    flex:1,
                    padding:SIZES.medium
                }}>

                    <Home/>
                    <Products/>
                    <ServicesMain/>
                  </View>

            </ScrollView>
};
export default App;
