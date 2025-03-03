import { Chip } from '@heroui/react';
import { FC } from 'react';
import Versions from '@renderer/components/Versions';

const App: FC = () => {
    return (
        <div className="p-4 flex flex-col gap-4">
            <h1 className="text-3xl font-extrabold text-blue-500">Zenith Boilerplate</h1>
            <a href="https://github.com/arounte" target="_blank" rel="noreferrer">
                <h2 className="text-lg font-light text-blue-400 hover:text-pink-500">
                    GitHub: @Arounte
                </h2>
            </a>
            <Chip color="primary" variant="shadow" className="my-2">
                HeroUI works 🍻
            </Chip>
            <Versions />
        </div>
    );
};

export default App;
