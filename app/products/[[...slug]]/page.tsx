import React from 'react'

interface Props {
  params: Promise<{ slug?: string[] }>
}

const ProductPage = async ({ params }: Props) => {
  const { slug } = await params
  const slugString = slug?.join('/') || 'default-slug'
  
  return (
    <div>
      ProductPage {slugString}
    </div>
  )
}

export default ProductPage