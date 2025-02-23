export enum CodeGeneratorType {
  FASTAPI = 'fastapi',
  EXPRESS = 'express',
  REACT = 'react'
}

export interface CodeGenerator {
  type: CodeGeneratorType;
  label: string;
  generate: (params: GeneratorParams) => string;
}

export interface GeneratorParams {
  projectName: string;
  resourceName: string;
  version: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  template: Record<string, any>;
} 