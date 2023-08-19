import React from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'

export interface SEOProps extends NextSeoProps {}

export const SEO = ({ title, description, ...props }: SEOProps) => (
  <NextSeo
    title={title}
    description={description}
  />
)