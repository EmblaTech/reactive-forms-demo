export class CustomValidator {
    static notUnique(control) {
        const db = [
            'user1@mail.com'
        ];

        return new Promise(resolve => {
            setTimeout(() => {
                if (db.indexOf(control.value) !== -1) {
                    resolve({ notUnique: true });
                }
                resolve(null);
            }, 4000);
        });
    }
}
