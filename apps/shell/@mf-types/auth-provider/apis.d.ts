
    export type RemoteKeys = 'auth-provider/auth-button';
    type PackageType<T> = T extends 'auth-provider/auth-button' ? typeof import('auth-provider/auth-button') :any;