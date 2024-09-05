import React from 'react'

const PreviewImage = ({ params }: { params: { slug: string } }) => {
    return (
        <div>{params.slug}</div>
    )
}

export default PreviewImage