import firebase from 'firebase'

class Fire {
    constructor() {
        // this.init()
    }

    // init = () => {
    //     if(!firebase.apps.length) {
    //         firebase.initializeApp({
    //             apiKey: "AIzaSyB_g3OhrHpHQj_LOsK5Jysg-GxSlS8hypE",
    //             authDomain: "mobilebeauty-fe499.firebaseapp.com",
    //             databaseURL: "https://mobilebeauty-fe499.firebaseio.com",
    //             projectId: "mobilebeauty-fe499",
    //             storageBucket: "mobilebeauty-fe499.appspot.com",
    //             messagingSenderId: "883147937311",
    //             appId: "1:883147937311:web:3967d77fd222f1cf1fe72a",
    //             measurementId: "G-8CCJTTZJK8"
    //         })
    //     }
    //     //if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
    // };

   send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            this.db.push(message);
        });
    };

    parse = message => {
        const { user, text, timestamp } = message.val();
        const { key: _id } = message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off();
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
}

export default new Fire();