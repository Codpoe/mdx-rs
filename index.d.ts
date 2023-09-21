/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface Toc {
  text: string;
  id: string;
  depth: number;
}
export interface Output {
  code: string;
  links: Array<string>;
  html: string;
  title: string;
  toc: Array<Toc>;
  frontmatter: string;
}
export interface CompileOptions {
  value: string;
  filepath: string;
  development: boolean;
  root: string;
}
/** Turn MDX into JavaScript. */
export function compile(options: CompileOptions): Promise<Output>;
export function compileSync(options: CompileOptions): Output;
