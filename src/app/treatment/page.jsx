import Breadcrumbs from '@/components/breadCrumbs/breadcrumbs'
import TreatmentBanner from '@/components/Treatments/TreatmentBanner'
import TreatmentBody from '@/components/Treatments/TreatmentBody'
import React from 'react'

function Page() {
    const BreadCrumbsData=[
        {title:"Home",link:"/"},
        {title:"Treatments"},
        {title:"Test"}
    ]
  return (
    <>
    <TreatmentBanner/>
    <Breadcrumbs data={BreadCrumbsData}/>
    <TreatmentBody/>
    </>
  )
}

export default Page