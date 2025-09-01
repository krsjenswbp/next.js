import { handlePath } from './actions'

console.log(handlePath)

export default async function Page() {
  return 'Hello'
}

export const config = { runtime: 'edge' }
