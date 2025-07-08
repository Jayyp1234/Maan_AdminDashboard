import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "sonner";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
	return (
		<Provider store={store}>
			<Toaster
				expand={false}
				richColors
				position="top-right"
				style={{
					fontFamily: "var(--font-family)",
				}}
			/>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
