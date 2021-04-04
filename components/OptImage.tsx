import React from 'react'

interface Props {
    src: string
    className?: string
    [propName: string]: any
}

type ImageType = 'png' | 'jpeg'

const OptImage = (props: Props) => {
    const { src, className, ...rest } = props

    let imageType: ImageType = 'jpeg'

    if (src.endsWith('png')) {
        imageType = 'png'
    } else if (!(src.endsWith('jpg') || src.endsWith('jpeg'))) {
        throw new Error('Solo soporta jpg(jpeg) y png')
    }

    switch (imageType) {
        case 'jpeg':
        case 'png':
            return (
                <picture className={className}>
                    <source
                        srcSet={require(`../assets/${src}?webp`)}
                        type="image/webp"
                    />
                    <source
                        srcSet={require(`../assets/${src}`)}
                        type={`image/${imageType}`}
                    />
                    <img
                        className={className}
                        {...rest}
                        src={require(`../assets/${src}`)}
                    />
                </picture>
            )
    }
}

export default OptImage
