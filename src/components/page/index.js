import React from 'react';
import { View, ScrollView } from '../../abstraction';

/**
 * A fullscreen page component
 */
export const Page = (props) => <View style={{ height: '100vh', flex: 1 }} {...props} />;

/**
 * Page 
 * @param {*} props 
 */
export const ScrollingPage = (props) => <ScrollView {...props} style={{ flex: 1 }} />;
