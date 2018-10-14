import { Locale } from '../locale';

export class JapaneseLocale extends Locale {
    public code = 'ja';
    public name = '日本語';
    public strings = {
        title: '時計',
        nowHeader: '只今の時刻',

        synchronize: 'サーバーの時刻を取得',
        synchronizing: 'サーバーの時刻を取得中',
        synchronized: 'サーバーの時刻と同期完了',

        seconds: '秒',

        requestTime: 'リクエスト時間',
        clientDelay: 'サーバー時刻の違い（クライアントの遅め）',

        synchronizationTooLong: 'サーバーの時刻を取得する際に１秒以上かかりましたため、'
            + '今表示されてる時刻は実際より異なる可能性があります。'
            + 'インターネットの接続状態を確認した上、やり直してください。'
    };
}
