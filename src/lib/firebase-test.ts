// Simple test to verify Firebase connection
import { auth, db, storage } from './firebase';

console.log('Firebase Auth:', auth ? '✓ Initialized' : '✗ Failed');
console.log('Firebase Firestore:', db ? '✓ Initialized' : '✗ Failed');
console.log('Firebase Storage:', storage ? '✓ Initialized' : '✗ Failed');
console.log('\nFirebase Project ID:', db.app.options.projectId);
console.log('Firebase Auth Domain:', auth.config.authDomain);

export {};
