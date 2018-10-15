import { Locale } from '../locale';

export class EnglishLocale extends Locale {
    public code = 'en';
    public name = 'English';
    public strings = {
        title: 'Clock',
        nowHeader: 'Current Time',

        serverTime: 'Server Time',
        clientTime: 'Client Time',

        tabSynchronize: 'Server Time',
        tabTimezone: 'Timezones',
        tabDisplay: 'Display',

        synchronize: 'Synchronize with server',
        synchronizing: 'Synchronizing with server…',
        synchronized: 'Synchronized',

        requestTime: 'Synchronization Time',
        clientDelay: 'Difference',

        seconds: 'seconds',

        clientBehind: 'Client is [[0]] seconds delay',
        serverBehind: 'Client is [[0]] seconds early',

        synchronizationTooLong: 'Synchonization took longer than 1 second, '
            + 'synchronized time might not be precisely accurate with server. '
            + 'Please check your internet connection and try again.'
    };
}
