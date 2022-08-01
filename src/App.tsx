import './css/App.css';
import Sidebar from './components/sidebar/Sidebar';
import Wrapper from './components/Wrapper';
import Header from './components/header/Header';
import Editor from './components/editor/Editor';

function App() {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      {/* <EditorHeader/> */}
      <Editor/>
    </Wrapper>
  );
}

export default App;
