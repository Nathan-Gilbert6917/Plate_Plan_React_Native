import React from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import UserNav from "./UserNav";
import AuthStack from "./AuthStack";

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <UserNav userId={user.uid} /> : <AuthStack />;
}
