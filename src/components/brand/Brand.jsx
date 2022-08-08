import React from 'react'
import { google, slack, atlassian, dropbox, shopify } from './imports'
import './brand.css'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt='Google Logo' />
      </div>
      <div>
        <img src={slack} alt='Slack Logo' />
      </div>
      <div>
        <img src={atlassian} alt='Atlassian Logo' />
      </div>
      <div>
        <img src={dropbox} alt='Dropbox Logo' />
      </div>
      <div>
        <img src={shopify} alt='Shopify Logo' />
      </div>
    </div>
  )
}

export default Brand
