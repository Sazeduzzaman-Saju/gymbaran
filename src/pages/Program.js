import useWebTitle from '@/hook/useWebTitle';
import React from 'react';

const Program = () => {
    useWebTitle('Gym Program Page')
    return (
        <div>
            <h1>This is Program Page</h1>
        </div>
    );
};

export default Program;