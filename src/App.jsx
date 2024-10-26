import Router from "./router/Router";
import ReactQueryProvider from "./providers/ReactQueryProvider";

function App() {
	return (
		<ReactQueryProvider>
			<Router />
		</ReactQueryProvider>
	);
}

export default App;
