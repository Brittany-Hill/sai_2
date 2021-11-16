export class User {
    uid: string;
    email: string;
    displayName?: string;

    constructor(userObj: { uid: string; email: string; displayName: string | undefined; } ) {
        this.uid = userObj.uid;
        this.email = userObj.email;
        this.displayName = userObj.displayName;
    }

}
