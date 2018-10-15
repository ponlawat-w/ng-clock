export abstract class Locale {
    public abstract code: string;
    public abstract name: string;
    public abstract strings: any;

    public getString(key: string, ...params: string[]) {
        if (this.strings[key]) {
            if (params) {
                let str: string = this.strings[key];
                params.forEach((value, index) => {
                    str = str.replace(`[[${index}]]`, value);
                });
                return str;
            }

            return this.strings[key];
        }

        return `[[${key}]]`;
    }
}
