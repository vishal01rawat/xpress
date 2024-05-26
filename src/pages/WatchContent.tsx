import React from 'react'

import { Table } from '../components/Table/Table';
import { Spinner } from '../components/Spinner';
import { WatchColumn } from '../components/Column/WatchColumn';

// import useFloorList from '../../service/HotelConfiuration/useRoomsList';

function Watch() {
  const { isLoading, data, error } = useFloorList(true);
  return (
    <div>
        <div className='mt-1'>
        {isLoading ? (
             <div className='ml-2 h-18 w-full flex justify-start items-center'>
            
             <span>Loading...</span>   <Spinner />
           </div>
        ) : (
          <Table column={WatchColumn} data={data?.floorList || []} /> 
        )}
      </div>
    </div>
  )
}

export default Watch