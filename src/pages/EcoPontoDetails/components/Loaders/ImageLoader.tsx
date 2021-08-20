import React from "react"
import ContentLoader, { Rect } from "react-content-loader/native"

function ImageLoader() {
    return (
        <ContentLoader
            speed={1}
            width="100%"
            height={240}
            viewBox="0 0 400 240"
            backgroundColor="#ecebeb"
            foregroundColor="#f3f3f3"
        >
            <Rect x="0" y="0" rx="2" ry="2" width="400" height="400" />
        </ContentLoader>
    )
}

export default ImageLoader;