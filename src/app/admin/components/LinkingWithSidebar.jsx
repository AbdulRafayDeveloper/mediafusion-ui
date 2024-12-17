import React from 'react'
import Sidebar from './Sidebar';

function LinkingWithSidebar() {
    return (
        <div>
            <Sidebar
                dashboard="../../admin/dashboard"
                customers="../../admin/customers/list"
            ></Sidebar>
        </div >
    )
}

export default LinkingWithSidebar