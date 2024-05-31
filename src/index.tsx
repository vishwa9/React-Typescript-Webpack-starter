import { createRoot } from "react-dom/client";

import { App } from "./App";

// ReactDOM.render(<App />, document.getElementById('root'));

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
