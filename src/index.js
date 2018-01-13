import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App';
import configureStore, { history } from './store/configureStore';

const store = configureStore();

store.subscribe((state) => console.log(store.getState()));

const AppWrapper = (App) => {
  return (
    <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>
    </AppContainer>
  );
};

ReactDOM.render(AppWrapper(App), document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NewApp = require('./containers/App').default;
    ReactDOM.render(AppWrapper(NewApp), document.getElementById('app'));
  });
}
