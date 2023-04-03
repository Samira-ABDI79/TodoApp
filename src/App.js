
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import ScrollToTop from "./ScrollToTop/ScrollToTop"
import Todo from "./Pages/Todo";
function App() {
	return (
		<>
			<Router>
				<ScrollToTop>
					<Routes>
						<Route element={<Layout />}>
<Route path='/' element={<Todo />} />
          </Route>
        </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;