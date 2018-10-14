export abstract class Locale {
    public abstract code: string;
    public abstract name: string;
    public abstract strings: {
        title: string,
        nowHeader: string,

        synchronize: string,
        synchronizing: string,
        synchronized: string,

        seconds: string,

        requestTime: string,
        clientDelay: string,

        synchronizationTooLong: string
    };

    public getString(key: string) {
        if (this.strings[key]) {
            return this.strings[key];
        }

        return `[[${key}]]`;
    }
}
