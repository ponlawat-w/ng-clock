import { Locale } from '../locale';

export class EnglishLocale extends Locale {
    public code = 'en';
    public name = 'English';
    public strings = {
        title: 'Clock',
        nowHeader: 'Current Time',

        synchronize: 'Synchronize with server',
        synchronizing: 'Synchronizing with server…',
        synchronized: 'Synchronized',

        seconds: 'seconds',

        requestTime: 'Synchronization Time',
        clientDelay: 'Computer Delay Time',

        synchronizationTooLong: 'Synchonization took longer than 1 second, '
            + 'synchronized time might not be precisely accurate with server. '
            + 'Please check your internet connection and try again.'
    };
}
