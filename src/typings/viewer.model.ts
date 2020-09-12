    export interface PrimaryLanguage {
        id: string;
        name: string;
        color: string;
        __typename?: string;
    }

    export interface Stargazers {
        totalCount: number;
        __typename?: string;
    }

    export interface Node {
        id: string;
        name: string;
        primaryLanguage: PrimaryLanguage;
        description: string;
        stargazers: Stargazers;
        url: string;
        __typename?: string;
    }

    export interface Edge {
        cursor: string;
        node: Node;
        __typename?: string;
    }

    export interface PageInfo {
        endCursor: string;
        __typename?: string;
    }

    export interface StarredRepositories {
        edges: Edge[];
        pageInfo: PageInfo;
        __typename?: string;
    }

    export interface Viewer {
        login?: string;
        name?: string;
        starredRepositories: StarredRepositories;
        __typename?: string;
    }

    export interface Data {
        viewer: Viewer;
    }

    export interface RootObject {
        data: Data;
    }

