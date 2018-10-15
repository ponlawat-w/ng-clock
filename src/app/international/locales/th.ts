import { Locale } from '../locale';

export class ThaiLocale extends Locale {
    public code = 'th';
    public name = 'ภาษาไทย';
    public strings = {
        title: 'นาฬิกา',
        nowHeader: 'ขณะนี้เวลา',

        serverTime: 'เวลาจากเซอร์เวอร์',
        clientTime: 'เวลาจากอุปกรณ์',

        tabSynchronize: 'เวลาเซอร์เวอร์',
        tabTimezone: 'เขตเวลา',
        tabDisplay: 'การแสดงผล',

        synchronize: 'เชื่อมกับเวลาเซอร์เวอร์',
        synchronizing: 'กำลังเชื่อมต่อ…',
        synchronized: 'เชื่อมกับเวลาเซอร์เวอร์แล้ว',

        requestTime: 'เวลาที่ใช้เชื่อมต่อ',
        clientDelay: 'ความคลาดเคลื่อน',

        seconds: 'วินาที',

        clientBehind: 'อุปกรณ์ช้ากว่าเซอร์เวอร์ [[0]] วินาที',
        serverBehind: 'อุปกรณ์เร็วกว่าเซอร์เวอร์ [[0]] วินาที',

        synchronizationTooLong: 'ใช้เวลาในการเชื่อมต่อมากกว่า 1 วินาที เวลาอาจคลาดเคลื่อนจากความเป็นจริง'
            + 'กรุณาตรวจสอบสภาพอินเทอร์เน็ตแล้วลองใหม่'
    };
}
