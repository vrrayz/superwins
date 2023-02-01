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
    <section className='info-section px-3'>
      <div className='info'>
        <p className='info-text'>NEW Earn 2.5% on all user purchase from referrals</p>
      </div>
    </section>
    <section className='featured px-3'>
      <div className="section-heading">
        <span>Featured</span>
      </div>
      <div className="grid">
        <div className="grid-item">
          <div className="card border-0">
          <img src="https://i.seadn.io/gae/JSABuWLdFZdOW6pyaNXRfT8MBhVmw18xMoTAF9kRNc76-86fTg_rsVD5H9z3tsID1c8kaeieZNk7fqZU3Fntkdg7EL5EB67PtV6dog?fit=max&w=350&auto=format" className='card-image-top nft-card-image' alt="nft_image" />
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
