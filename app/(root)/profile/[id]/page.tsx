import Header from '@/components/Header';
import React from 'react'

const Page = async ({params}:ParamsWithSearch) => {
 const {id} = await params;
    return (
    <div className='wrapper page'>

        <Header subHeader='nishant@dev.com' title="Nishant | Dev" userImg='/assets/images/dummy.jpg'/>
        <h1 className="text-2xl font-karla">USER ID: {id}
        </h1>
        </div>
  )
}

export default Page