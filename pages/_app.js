import '../styles/style.css';
import '../styles/media.css';
import store from '../store';
import { Provider } from 'react-redux';

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}
