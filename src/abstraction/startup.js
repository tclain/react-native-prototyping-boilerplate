import { isReactNative } from './platform';
import { AppRegistry } from 'react-native-web';
/**
 * boot a main component
 * @param {React.Component} Component 
 * @param {String} domIdForWeb 
 */
export const boot = (Component, domIdForWeb = 'root') => {
	AppRegistry.registerComponent('App', () => Component);
	if (!isReactNative()) {
		AppRegistry.runApplication('App', { rootTag: document.getElementById(domIdForWeb) });
	}
};
