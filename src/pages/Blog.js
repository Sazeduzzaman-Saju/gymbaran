import useWebTitle from '@/hook/useWebTitle';
import React from 'react';

const Blog = () => {
    useWebTitle('Gym Blog Page')
    return (
        <div>
            <h1>This is Blog Page</h1>
        </div>
    );
};

export default Blog;