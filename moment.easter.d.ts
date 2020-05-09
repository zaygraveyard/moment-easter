import * as moment from 'moment';

declare module 'moment' {
    interface Moment {
        easter(year?: number): Moment;
    }
    export function easter(year: number): Moment;
}

export = moment;
