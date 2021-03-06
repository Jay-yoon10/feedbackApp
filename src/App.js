import FeedbackList from "./components/FeedbackList.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import { FeedbackProvider } from "./context/FeedbackContext.jsx";
import AboutIconLink from "./components/AboutIconLink.jsx";

// import Card from "./components/shared/Card.jsx";
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

// function App() {
//   const title = "Blog Post";
//   const body = "This is my blog post";
//   const comments = [
//     { id: 1, text: "Comment one" },
//     { id: 2, text: "Comment two" },
//     { id: 2, text: "Comment three" },
//   ];

//   const loading = false;
//   const showComments = true;
//   if (loading) return <h1>Loading...</h1>;

//   const commentBlock = (
//     <div className="comments">
//       <h3>Comments ({comments.length})</h3>
//       <ul>
//         {comments.map((comment, index) => (
//           <li key={index}>{comment.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
//   return (
//     <div className="container">
//       <h1>{title.toUpperCase()}</h1>
//       <p>{body}</p>

//       {showComments && commentBlock}
//     </div>
//   );
// }
export default App;
