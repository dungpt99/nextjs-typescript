import { ReducersMapObject } from "@reduxjs/toolkit";

import tenantReducer from "./tenant/tenant.reducer";
import walletReducer from "./wallet/wallet.reducer";
import authentication from "./authentication/authentication";

const rootReducer: ReducersMapObject = {
  tenantReducer,
  walletReducer,
  authentication,
};

export default rootReducer;
