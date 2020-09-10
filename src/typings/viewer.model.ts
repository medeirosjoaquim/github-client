  export interface PrimaryLanguage {
      id: string;
      name: string;
      color: string;
  }

  export interface Node {
      id: string;
      name: string;
      primaryLanguage: PrimaryLanguage;
  }

  export interface Edge {
      cursor: string;
      node: Node;
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

