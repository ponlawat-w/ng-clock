import { Locale } from '../locale';

export class SpanishLocale extends Locale {
    public code = 'es';
    public name = 'Español';
    public strings = {
        title: 'Reloj',
        nowHeader: 'Ahora',

        serverTime: 'Tiempo del servidor',
        clientTime: 'Tiempo del ciente',

        tabSynchronize: 'Sincronización',
        tabTimezone: 'Zonas Horarias',
        tabDisplay: 'Formato',

        synchronize: 'Sincronizar con el servidor',
        synchronizing: 'Sincronizando…',
        synchronized: 'Sincronizado',

        requestTime: 'Tiempo de sincronización',
        clientDelay: 'Diferencia',

        seconds: 'segundos',

        clientBehind: 'El cliente es [[0]] segundos más lento',
        serverBehind: 'El cliente es [[0]] segundos más pronto',

        synchronizationTooLong: 'Sincronización fue más que un segundo, '
            + 'el tiempo sincronizado puede ser impreciso. '
            + 'Compruebe el estado de la conexión de internet y pruebe otra vez.'
    };
}
