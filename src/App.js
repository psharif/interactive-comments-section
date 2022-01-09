import CommentList from "./components/CommentList";
import { CommentProvider } from "./context/comments.context.js";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <CommentProvider>
        <CommentList />
      </CommentProvider>
    </div>
  );
}

export default App;
