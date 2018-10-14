import { Locale } from '../locale';

export class ThaiLocale extends Locale {
    public code = 'th';
    public name = 'ภาษาไทย';
    public strings = {
        title: 'นาฬิกา',
        nowHeader: 'ขณะนี้เวลา',

        synchronize: 'เชื่อมกับเวลาเซอร์เวอร์',
        synchronizing: 'กำลังเชื่อมต่อ…',
        synchronized: 'เชื่อมกับเวลาเซอร์เวอร์แล้ว',

        seconds: 'วินาที',

        requestTime: 'เวลาที่ใช้เชื่อมต่อ',
        clientDelay: 'เวลาที่คอมพิวเตอร์ล่าช้า',

        synchronizationTooLong: 'ใช้เวลาในการเชื่อมต่อมากกว่า 1 วินาที เวลาอาจคลาดเคลื่อนจากความเป็นจริง'
            + 'กรุณาตรวจสอบสภาพอินเทอร์เน็ตแล้วลองใหม่'
    };
}
