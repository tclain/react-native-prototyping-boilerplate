/**
 * A layer of abstraction on top of react-native and web
 */

export { View, Text, Button, ScrollView } from 'react-native-web';
export { default as styled } from 'styled-components';
export { default as posed } from 'react-pose';
export { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
export { isReactNative } from './platform';
export { boot } from './startup';
