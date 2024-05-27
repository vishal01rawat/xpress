/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */
import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
// import { EyeIcon } from '@heroicons/react/20/solid';
import { urlPath } from '../../utils/Url';
// import useDeleteOrg from '../../hooks/useDeleteOrg';
// import useOrganisation from '../../hooks/useOrganisation';
// import Modal from '../Modal';
// import { useState } from 'react';
// import { reach } from 'yup';



export const watchContentButton = (info: any) => {
	
	const navigate = useNavigate();
	// const sidebar: any = useOutletContext();
	// const userRoles = sidebar?.filter((item: any) => {
	// 	return item?.path == '/organisation';
	// });
	
	const navigateHandler = (value: any) => {
		navigate(`/uploaded-data?classId=${value.row.original.ACTION}`);
	};

	
	return (
		<>
		
	
<div className='gap-x-2 flex'>



   
        <button onClick={() => navigateHandler(info)}>
            <img
                className='border h-[28px] bg-icons rounded-md w-[28px] p-2 '
                src={`${urlPath.icon}view.png`}
            />
        </button>
  


</div>


	
		</>
		
	);
};
