import { useAuthState, useDbData } from "./firebase";

export interface Profile {
  user: any;
  isAdmin: boolean;
}

export const useProfile = (): [Profile, boolean, Error | undefined] => {
  const { user } = useAuthState();
  const [isAdmin, isLoading, error] = useDbData(`/admins/${user?.uid || 'guest'}`);
  
  return [{ user, isAdmin: !!isAdmin }, isLoading, error];
};
