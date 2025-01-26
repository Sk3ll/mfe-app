
    export type RemoteKeys = 'auth_provider/auth-button';
    type PackageType<T> = T extends 'auth_provider/auth-button' ? typeof import('auth_provider/auth-button') :any;