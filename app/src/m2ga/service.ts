import {Route, Get} from '@wk/edge-services';

@Route('/')
export class Service {
    @Get()
    async operation(id) {
    }
}