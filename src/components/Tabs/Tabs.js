import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Tabs = ({tabs, updateParams}) => {
    const TabSection = styled.section `
    @media (min-width: 768px) {
        justify-content: start;
    }
    `
  return (
    <TabSection className='tabs'>
        <Link
          to={"/"}
          className={`tab-item ${tabs.live && "active"}`}
          onClick={() => updateParams()}
        >
          live now (67)
        </Link>
        <Link
          to={"/?tab=completed"}
          className={`tab-item ${tabs.completed && "active"}`}
          onClick={() => updateParams("?tab=completed")}
        >
          completed (2399)
        </Link>
        <Link
          to={"/?tab=activity"}
          className={`tab-item ${tabs.activity && "active"}`}
          onClick={() => updateParams("?tab=activity")}
        >
          activity <span className="badge badge-primary">11</span>
        </Link>
    </TabSection>
  )
}
