import { FC, useRef } from 'react';

const Versions: FC = () => {
    const { current: versions } = useRef(window.electron.process.versions);

    return (
        <ul className="text-blue-500">
            <li>Electron v{versions.electron}</li>
            <li>Chromium v{versions.chrome}</li>
            <li>Node v{versions.node}</li>
            <li>V8 v{versions.v8}</li>
        </ul>
    );
};

export default Versions;
