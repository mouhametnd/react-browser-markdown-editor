import './css/App.css';
import Sidebar from './components/sidebar/Sidebar';
import Wrapper from './components/Wrapper';
import Header from './components/header/Header';
import Editor from './components/editor/Editor';
import ModalWrapper from './components/others/ModalWrapper';

function App() {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      {/* <EditorHeader/> */}
      <Editor />

      <ModalWrapper title='Enter Document Name' description="Are you sure you want to delete the 'welcome' document and its contents? This action cannot be reversed."/>
    </Wrapper>
  );
}

export default App;
