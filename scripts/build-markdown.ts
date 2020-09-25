import path from 'path'
import {
  MarkdownTranspiler,
  TypescriptClassVueFileCreator
} from '@gabio/markdown-vue-transpiler'
import { GioMarkdownParser } from '../src/lib/utils/markdown'
import { RELATIVE_URL_RESOLVER } from '../showcase/constants'

const inputPattern =
  path.resolve(__dirname, '../showcase/markdown') + '/**/*.md'
const outputDir = path.resolve(__dirname, '../showcase/data')

const markdownCompiler = new MarkdownTranspiler({
  inputPattern,
  outputDir,
  parser: new GioMarkdownParser(RELATIVE_URL_RESOLVER),
  fileCreator: new TypescriptClassVueFileCreator()
})

markdownCompiler.startCompilation()
