import CommingSoon from '@/components/ComingSoon';
import useWebTitle from '@/hook/useWebTitle';
import React, { useEffect, useState } from 'react';
import PuffLoader from "react-spinners/PuffLoader";

const Program = () => {
    useWebTitle('Gym Program Page')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 2000)
    }, [])
    return (
        <>{loading ? <div className='container'>
            <div className='row'>
                <div className='flex justify-center items-center' style={{ height: '100vh' }}>
                    <PuffLoader color={'#4568dc'} loading={loading} size={150} />
                </div>
            </div>
        </div>
            : <CommingSoon></CommingSoon>}

        </>
    );
};

export default Program;