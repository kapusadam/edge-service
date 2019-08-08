import {Service} from './service';

export function makeCall(id) {
    const svc = new Service();

    return svc.operation(id);
}