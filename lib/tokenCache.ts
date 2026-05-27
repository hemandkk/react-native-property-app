import * as SecureStore from "expo-secure-store";
import { TokenCache } from "../node_modules/@clerk/expo/dist/cache";
const createTokenCache = (): TokenCache => {
  return {
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch {
        return null;
      }
    },

    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch {}
    },
  };
};

export const tokenCache = createTokenCache();
