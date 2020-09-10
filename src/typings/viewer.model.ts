    export interface PrimaryLanguage {
        id: string;
        name: string;
        color: string;
    }

    export interface Stargazers {
        totalCount: number;
    }

    export interface StarredRepository {
        id: string;
        name: string;
        primaryLanguage: PrimaryLanguage;
        description: string;
        stargazers: Stargazers;
        url: string;
    }

    export interface Edge {
        cursor: string;
        node: StarredRepository;
    }

    export interface StarredRepositories {
        edges: Edge[];
    }

    export interface Viewer {
        login?: string;
        name: string;
        starredRepositories: StarredRepositories;
    }

    export interface Data {
        viewer: Viewer;
    }

    export interface RootObject {
        data: Data;
    }

