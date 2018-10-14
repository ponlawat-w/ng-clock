import { Locale } from '../locale';

export class SpanishLocale extends Locale {
    public code = 'es';
    public name = 'Español';
    public strings = {
        title: 'Reloj',
        nowHeader: 'Ahora',

        synchronize: 'Sincronizar con el servidor',
        synchronizing: 'Sincronizando…',
        synchronized: 'Sincronizado',

        seconds: 'segundos',

        requestTime: 'Tiempo de sincronización',
        clientDelay: 'El retraso del ordenador',

        synchronizationTooLong: 'Sincronización fue más que un segundo, '
            + 'el tiempo sincronizado puede ser impreciso. '
            + 'Compruebe el estado de la conexión de internet y pruebe otra vez.'
    };
}
