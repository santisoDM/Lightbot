export default ({ config }) => {
    return {
      ...config,
      name: "Lightapp",
      slug: "Lightapp",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/images/icon.png",
      scheme: "myapp",
      userInterfaceStyle: "automatic",
      splash: {
        image: "./assets/images/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff"
      },
      ios: {
        supportsTablet: true,
        infoPlist: {
          NSBluetoothAlwaysUsageDescription:
            "Esta aplicación utiliza Bluetooth para conectarse a dispositivos BLE.",
          NSBluetoothPeripheralUsageDescription:
            "Esta aplicación necesita acceso a Bluetooth para conectarse a dispositivos BLE."
        }
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./assets/images/adaptive-icon.png",
          backgroundColor: "#ffffff"
        },
        permissions: [
          "android.permission.BLUETOOTH",
          "android.permission.BLUETOOTH_ADMIN",
          "android.permission.BLUETOOTH_ADVERTISE",
          "android.permission.BLUETOOTH_SCAN",
          "android.permission.BLUETOOTH_CONNECT",
          "android.permission.ACCESS_FINE_LOCATION",
          "android.permission.ACCESS_COARSE_LOCATION"
        ],
        package: "com.anonymous.Lightapp",
        minSdkVersion: 21
      },
      web: {
        bundler: "metro",
        output: "static",
        favicon: "./assets/images/favicon.png"
      },
      plugins: [
        "expo-router",
        [
          "react-native-permissions",
          {
            iosPermissions: {
              bluetoothPeripheral: "Necesitamos acceso a Bluetooth para conectar con dispositivos"
            },
            android: {
              permissions: [
                "android.permission.BLUETOOTH",
                "android.permission.BLUETOOTH_ADMIN",
                "android.permission.BLUETOOTH_ADVERTISE",
                "android.permission.BLUETOOTH_SCAN",
                "android.permission.BLUETOOTH_CONNECT"
              ]
            }
          }
        ],
        [
          "react-native-ble-plx",
          {
            isBackgroundEnabled: true,
            modes: ["peripheral", "central"],
            bluetoothAlwaysPermission:
              "Allow $(PRODUCT_NAME) to detect your controller with bluetooth"
          }
        ],
        [
          "expo-build-properties",
          {
            android: {
              compileSdkVersion: 31,
              targetSdkVersion: 31,
              minSdkVersion: 21,
              buildToolsVersion: "31.0.0"
            }
          }
        ]
      ],
      experiments: {
        typedRoutes: true
      },
      extra: {
        router: {
          origin: false
        },
        eas: {
          projectId: "756260ad-df74-451e-8756-1ada8e103ed2"
        }
      }
    };
  };
  