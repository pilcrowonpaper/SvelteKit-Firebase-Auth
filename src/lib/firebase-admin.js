import admin from "firebase-admin"
//TODO: import private key
import * as serviceAccount from "[PATH_TO_KEY]"

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default admin