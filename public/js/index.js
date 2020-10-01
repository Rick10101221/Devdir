const DB = firebase.database();

DB.ref("test/").set({"test": "success"});