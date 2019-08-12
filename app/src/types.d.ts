export interface IPackageJson {
    name: string;
    version: string;
    id: string;
    repository: string;
    license: string;
    dependencies: string[];
    devDependencies: string[];
    engines: string[];
}

declare module '*package.json' {
    const value: IPackageJson;
    export default value;
}