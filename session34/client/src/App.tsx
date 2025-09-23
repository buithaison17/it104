// import LoadingProcess from './components/LoadingProcess';
import { Provider } from 'react-redux';
import StudentManagement from './pages/StudentManagement';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <StudentManagement />
      {/* <LoadingProcess /> */}
    </Provider>
  );
};

export default App;
