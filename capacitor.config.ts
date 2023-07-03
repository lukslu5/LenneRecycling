import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lennetech.lennerecycling',
  appName: 'LenneRecycling',
  webDir: 'dist/lenne-recycling',
  server: {
    androidScheme: 'https',
    url: 'http://192.168.179.7:4200',
    cleartext: true
  }
};

export default config;
