import {Platform} from 'react-native';

import {dark} from './Color';

export default {
    text:{
        color: dark,
        fontSize: 18,
        fontFamily: Platform.OS === 'android'? 'Roboto': 'Avenir'
    }
}