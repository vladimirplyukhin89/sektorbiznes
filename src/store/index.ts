import { configureStore } from "@reduxjs/toolkit";

import { serverApi } from "../server/server.api";

export const store = configureStore({
	reducer: {
		[serverApi.reducerPath]: serverApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(serverApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
