import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

function InforLoader() {
    return (
        <ContentLoader
            speed={2}
            width="100%"
            height={462}
            viewBox="0 0 476 462"
            backgroundColor="#ecebeb"
            foregroundColor="#f3f3f3"
        >
            <Rect x="0" y="24" rx="6" ry="6" width="410" height="28" />
            <Rect x="0" y="66" rx="6" ry="6" width="380" height="18" />
            <Rect x="0" y="94" rx="6" ry="6" width="178" height="16" />

            <Rect x="0" y="126" rx="6" ry="6" width="380" height="18" />
            <Rect x="0" y="154" rx="6" ry="6" width="178" height="16" />

            <Rect x="0" y="186" rx="6" ry="6" width="380" height="18" />
            <Rect x="0" y="214" rx="6" ry="6" width="178" height="16" />

            <Rect x="0" y="248" rx="6" ry="6" width="380" height="18" />
            <Rect x="0" y="276" rx="6" ry="6" width="178" height="16" />

            <Rect x="0" y="312" rx="20" ry="20" width="100%" height="150" />
        </ContentLoader>
    )
}

export default InforLoader;