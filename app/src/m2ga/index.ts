import {makeCall} from './client';
// import * as x from '@uirouter/state-events';
import { myValue } from './common/common';
console.log('zazz ' + myValue);
//console.log(x);
debugger;
makeCall('someId').then(()=>{}).catch(()=>{});