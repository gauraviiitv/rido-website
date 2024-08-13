// src/lib/cognito.ts
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'ap-south-1_LF2e5j4Sx', // e.g. us-east-1_123456789
    ClientId: '1mp5jb5nmisds9n7bufg3luuta', // e.g. 1h57kf5cpq17m0j0pkljpovvj4
};

export const userPool = new CognitoUserPool(poolData);
