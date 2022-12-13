import { ReducersMapObject } from "@reduxjs/toolkit";

import tenantReducer from "../../pages/admin/tenant/tenant.reducer";
import walletReducer from "../../pages/admin/wallet/wallet.reducer";
import authentication from "./authentication/authentication";

const rootReducer: ReducersMapObject = {
  tenantReducer,
  walletReducer,
  authentication,
};

export default rootReducer;
