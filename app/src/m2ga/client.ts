import {Service} from './service';
import { myValue } from './common/common';

export function makeCall(id) {
    alert(myValue);
    debugger;
    const svc = new Service();

    return svc.operation(id);
}