import React from 'react';
import { useLocation, Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';



export const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    return(
        auth?.role?.find(role => allowedRoles?.includes(role)) ? 
        <Outlet/> : auth?.username ? 
        <Navigate to="/unauthorized" state={{from : location}} replace/> :
        <Navigate to="/login" state={{from : location}} replace/>
    );
}