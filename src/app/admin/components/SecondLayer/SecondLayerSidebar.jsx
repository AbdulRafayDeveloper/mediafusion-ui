import React from 'react'
import Sidebar from '../Sidebar';

function SecondLayerSidebar() {
    return (
        <div>
            <Sidebar
                dashboard="../../../admin/dashboard"
                addProjects="../../../admin/projects/add"
                projects="../../../admin/projects/list"
                customers="../../../admin/customers/list"
            ></Sidebar>
        </div >
    )
}

export default SecondLayerSidebar