import { Chip } from '@nextui-org/react'

function App(): JSX.Element {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-extrabold text-blue-500">Zenith Boilerplate</h1>
      <a href="https://github.com/arounte">
        <h2 className="text-lg font-light text-blue-400 hover:text-pink-500">GitHub: @Arounte</h2>
      </a>
      <Chip color="primary" variant="shadow" className="my-2">NextUI works 🍻</Chip>
    </div>
  )
}

export default App
