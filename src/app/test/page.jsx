import BranchBanner from '@/components/branch/branchBanner'
import BranchBody from '@/components/branch/BranchBody'
import Breadcrumbs from '@/components/branch/breadcrumbs'
import React from 'react'

function page() {
  return (
    <div className='' >
        <BranchBanner/>
        <Breadcrumbs BranchName={"test"}/>
        <div className='bg-[#F0F5FF]'>

        <BranchBody/>
        </div>
    </div>
  )
}

export default page