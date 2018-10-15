import { Locale } from '../locale';

export class JapaneseLocale extends Locale {
    public code = 'ja';
    public name = '日本語';
    public strings = {
        title: '時計',
        nowHeader: '現在時刻',

        serverTime: 'サーバー時刻より',
        clientTime: 'この端末の時刻より',

        tabSynchronize: 'サーバー時刻',
        tabTimezone: '時間帯',
        tabDisplay: '表示設定',

        synchronize: 'サーバーの時刻を取得',
        synchronizing: 'サーバーの時刻を取得中…',
        synchronized: 'サーバー時刻取得完了',

        requestTime: '接続時間',
        clientDelay: '偏差',

        seconds: '秒',

        clientBehind: '端末が[[0]]秒遅い',
        serverBehind: 'サーバーが[[0]]秒早い',

        synchronizationTooLong: 'サーバーの時刻を取得する際に１秒以上かかりましたため、'
            + '今表示されてる時刻は実際より異なる可能性があります。'
            + 'インターネットの接続状態を確認した上、やり直してください。'
    };
}
