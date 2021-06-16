# Use_Firebase_In_My_ProJecT:

* 1) InsTallinG_Firebase_CLI: npm i firebase // Checked package.json file Firebase Version Available.
* 2) Create a Folder Config.
* 3) Inside Config Folder Create a File Firebase.Js.
* 4) Firebase.Js File Code:

+ import * as firebase from 'firebase/app';
* Database Uses import database For ExamPle:
+ import 'firebase/database';
* AuthentiCation Uses import Auth For ExamPle:
+ import 'firebase/auth';

# Firebase.com/Go-to-Console:

* 5) Press Add Project button.
* 6) Fill ProJect Name Filled required Then Press Continue Button. 
* 7) Google Analytics: Then Press Continue Button.
* 8) Configure Google Analytics: Select default Account For Firebase Then Press Create ProJect Button.
* 9) Your new ProJect Is ready: Then Press Continue Button.
* 10) Get started by adding Firebase to your app: Then Press (Web) Option Any Three: (OS) {Select: Web} (Android) 
* 11) Fill App Name Filled required Then Press Register app button
* 12) Add Firebase SDK Please Copy These Field For ExamPle: (APIS)

+ var firebaseConfig = {
+    apiKey: "AIzaSyAQZM2xEpo5JATjBmcw0XSSFAY8SBwWJa0",
+    authDomain: "dfgdfg-bf4ff.firebaseapp.com",
+    projectId: "dfgdfg-bf4ff",
+    storageBucket: "dfgdfg-bf4ff.appspot.com",
+    messagingSenderId: "551880572875",
+    appId: "1:551880572875:web:1305e0d533a4a7f622804e",
+    measurementId: "G-G72HQGQ6JJ"
+  };
*  // Initialize Firebase
+  firebase.initializeApp(firebaseConfig);

* 13) Then Paste Firebase.Js File Inside ===^=== For ExamPle:

+ import * as firebase from 'firebase/app';
+ import 'firebase/database';
+ import 'firebase/auth';

+ var firebaseConfig = {
+    apiKey: "AIzaSyAQZM2xEpo5JATjBmcw0XSSFAY8SBwWJa0",
+    authDomain: "dfgdfg-bf4ff.firebaseapp.com",
+    projectId: "dfgdfg-bf4ff",
+    storageBucket: "dfgdfg-bf4ff.appspot.com",
+    messagingSenderId: "551880572875",
+    appId: "1:551880572875:web:1305e0d533a4a7f622804e",
+    measurementId: "G-G72HQGQ6JJ"
+  };
* Initialize Firebase
+ export default firebase.initializeApp(firebaseConfig);

# Todo File Code:

+ import firebase from './Config/Firebase.Js'

+ addTodo = () => {

+ const OBJ-Name = {title: "this.state.todos"}
+     firebase.database().ref('/').child('todos').push(OBJ-Name)
+ }

# Complete Firebase Database ExamPle!
