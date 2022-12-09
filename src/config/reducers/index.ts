import { ReducersMapObject } from "@reduxjs/toolkit";

import dashboardReducer from "../../pages/admin/dashboard/dashboard.reducer";
import tenantReducer from "../../pages/admin/tenant/tenant.reducer";
import walletReducer from "../../pages/admin/wallet/wallet.reducer";
import authentication from "./authentication/authentication";

const rootReducer: ReducersMapObject = {
  dashboardReducer,
  tenantReducer,
  walletReducer,
  authentication,
};

export default rootReducer;
