import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { tabData } from '../data/tabData'

export const Home = () => {
  const [urlParams, setUrlParams] = useState(new URLSearchParams(''))
  const [tabs, setTabs] = useState(tabData)

  const updateParams = (queryString = '') => {
    setUrlParams(new URLSearchParams(queryString))
  }
  useEffect(()=>{
    updateParams(window.location.search)
  },[])

  useEffect(() => {
    const activeTab = (urlParams.get('tab') === 'activity' || urlParams.get('tab') === 'completed') ? urlParams.get('tab') : 'live'
    setTabs({live: false, completed: false, activity: false, [activeTab]:true})
  },[urlParams])
  
  return (
    <>
    <section className='tabs'>
      <Link to={'/'} className={`tab-item ${tabs.live && 'active'}`} onClick={() => updateParams()}>live now (67)</Link>
      <Link to={'/?tab=completed'} className={`tab-item ${tabs.completed && 'active'}`} onClick={() => updateParams('?tab=completed')}>completed (2399)</Link>
      <Link to={'/?tab=activity'} className={`tab-item ${tabs.activity && 'active'}`} onClick={() => updateParams('?tab=activity')}>activity <span className='badge badge-primary'>11</span></Link>
    </section>
    </>
  )
}
