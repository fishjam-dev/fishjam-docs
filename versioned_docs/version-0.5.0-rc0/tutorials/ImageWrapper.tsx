// @ts-ignore
import React from 'react';

// @ts-ignore
import useBaseUrl from '@docusaurus/useBaseUrl';
// @ts-ignore
import ThemedImage from '@theme/ThemedImage';

type Props = {
    url: string,
    height?: number
    alt: string,
}

export const ImageWrapper = ({ url, height, alt }: Props) => {
    return <p style={{ display: "flex", justifyContent: "center" }}>
        <ThemedImage
            height={height}
            alt={alt}
            sources={{
                light: useBaseUrl(url),
                dark: useBaseUrl(url),
            }}
        />
    </p>
};
