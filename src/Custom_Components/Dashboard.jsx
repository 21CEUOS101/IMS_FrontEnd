import { DataTable } from '../Admin/data-table'
import { columns } from '../Admin/columns'

import React, { useEffect, useState } from 'react'
import { getAdmins } from '../Services/AdminService'

const Dashboard = () => {

  const [data, setData] = useState([])

  const getAllAdmins = async () => {
    const response = await getAdmins();
    setData(response);
  }

  useEffect(() => {
    getAllAdmins();
    console.log(data);
  }, [])

  return (
      <div className="flex-col">
          <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
          </div>
          </div>
    </div>
  )
}

export default Dashboard