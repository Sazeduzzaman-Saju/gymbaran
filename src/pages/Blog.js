import ComingSoon from '@/components/ComingSoon';
import useWebTitle from '@/hook/useWebTitle';
import React from 'react';

const Blog = () => {
    useWebTitle('Gym Blog Page')
    return (
        <div>
            <ComingSoon></ComingSoon>
        </div>
    );
};

export default Blog;