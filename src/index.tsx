import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import {Shop} from './screen/shop';

interface Props {}
export function Startup({}: Props) {
  return (
    <>
      <Provider store={store}>
        <SafeAreaView>
          <Shop />
        </SafeAreaView>
      </Provider>
    </>
  );
}
